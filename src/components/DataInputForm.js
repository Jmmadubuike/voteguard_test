import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DataInputForm.css';

const DataInputForm = () => {
    const [pollingUnits, setPollingUnits] = useState([]);
    const [wards, setWards] = useState([]);
    const [lgas, setLgas] = useState([]);
    const [states, setStates] = useState([]);
    const [parties, setParties] = useState([]);
    const [electionTypes, setElectionTypes] = useState([]);

    const [data, setData] = useState({
        polling_unit_id: '',
        ward_id: '',
        lga_id: '',
        state_id: '',
        party_id: '',
        election_type_id: '',
        vote_count: '',
        totalAccreditedVoters: '',
        totalVotes: ''
    });

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/states');
                setStates(response.data);
            } catch (error) {
                console.error('Error fetching states:', error);
            }
        };

        const fetchParties = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/parties');
                setParties(response.data);
            } catch (error) {
                console.error('Error fetching parties:', error);
            }
        };

        const fetchElectionTypes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/election-types');
                setElectionTypes(response.data);
            } catch (error) {
                console.error('Error fetching election types:', error);
            }
        };

        fetchStates();
        fetchParties();
        fetchElectionTypes();
    }, []);

    const handleStateChange = async (e) => {
        const stateId = e.target.value;
        setData({ ...data, state_id: stateId, lga_id: '', ward_id: '', polling_unit_id: '' });
        setLgas([]);
        setWards([]);
        setPollingUnits([]);

        if (stateId) {
            try {
                const response = await axios.get(`http://localhost:5000/api/lgas/${stateId}`);
                setLgas(response.data);
            } catch (error) {
                console.error('Error fetching LGAs:', error);
            }
        }
    };

    const handleLGAChange = async (e) => {
        const lgaId = e.target.value;
        setData({ ...data, lga_id: lgaId, ward_id: '', polling_unit_id: '' });
        setWards([]);
        setPollingUnits([]);

        if (lgaId) {
            try {
                const response = await axios.get(`http://localhost:5000/api/wards/${lgaId}`);
                setWards(response.data);
            } catch (error) {
                console.error('Error fetching Wards:', error);
            }
        }
    };

    const handleWardChange = async (e) => {
        const wardId = e.target.value;
        setData({ ...data, ward_id: wardId, polling_unit_id: '' });
        setPollingUnits([]);

        if (wardId) {
            try {
                const response = await axios.get(`http://localhost:5000/api/polling-units/${wardId}`);
                setPollingUnits(response.data);
            } catch (error) {
                console.error('Error fetching Polling Units:', error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/results', data, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            alert('Data uploaded successfully.');
            setData({
                polling_unit_id: '',
                ward_id: '',
                lga_id: '',
                state_id: '',
                party_id: '',
                election_type_id: '',
                vote_count: '',
                totalAccreditedVoters: '',
                totalVotes: ''
            });
            setLgas([]);
            setWards([]);
            setPollingUnits([]);
        } catch (error) {
            console.error('Error uploading data:', error);
            alert('Error uploading data. Please try again.');
        }
    };

    return (
        <div className="data-input-container">
            <h2>Election Data Entry Portal</h2>

            <div className="instructions">
                <p>
                    Welcome to the Election Data Entry Portal. Please provide accurate and up-to-date information for each field below.
                    This data is crucial for ensuring transparency and integrity in the electoral process.
                </p>
                <p>
                    Begin by selecting the appropriate <strong>State</strong>, followed by the corresponding <strong>LGA</strong>, <strong>Ward</strong>, and
                    <strong> Polling Unit</strong>. Proceed to fill in the political party, election type, and voting details carefully.
                </p>
                <p>
                    Ensure all information entered is correct before submitting. Thank you for your contribution to a fair and credible election process.
                </p>
            </div>

            <form className="data-input-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <select
                        id="state"
                        name="state_id"
                        value={data.state_id}
                        onChange={handleStateChange}
                        required
                    >
                        <option value="" disabled>Select State</option>
                        {states.map((state) => (
                            <option key={state._id} value={state._id}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="lga">LGA:</label>
                    <select
                        id="lga"
                        name="lga_id"
                        value={data.lga_id}
                        onChange={handleLGAChange}
                        required
                        disabled={!data.state_id}
                    >
                        <option value="" disabled>Select LGA</option>
                        {lgas.map((lga) => (
                            <option key={lga._id} value={lga._id}>
                                {lga.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="ward">Ward:</label>
                    <select
                        id="ward"
                        name="ward_id"
                        value={data.ward_id}
                        onChange={handleWardChange}
                        required
                        disabled={!data.lga_id}
                    >
                        <option value="" disabled>Select Ward</option>
                        {wards.map((ward) => (
                            <option key={ward._id} value={ward._id}>
                                {ward.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="pollingUnit">Polling Unit:</label>
                    <select
                        id="pollingUnit"
                        name="polling_unit_id"
                        value={data.polling_unit_id}
                        onChange={handleChange}
                        required
                        disabled={!data.ward_id}
                    >
                        <option value="" disabled>Select Polling Unit</option>
                        {pollingUnits.map((pu) => (
                            <option key={pu._id} value={pu._id}>
                                {pu.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="party">Party:</label>
                    <select
                        id="party"
                        name="party_id"
                        value={data.party_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select Party</option>
                        {parties.map((party) => (
                            <option key={party._id} value={party._id}>
                                {party.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="electionType">Election Type:</label>
                    <select
                        id="electionType"
                        name="election_type_id"
                        value={data.election_type_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select Election Type</option>
                        {electionTypes.map((type) => (
                            <option key={type._id} value={type._id}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="voteCount">Vote Count:</label>
                    <input
                        type="number"
                        id="voteCount"
                        name="vote_count"
                        value={data.vote_count}
                        onChange={handleChange}
                        required
                        min="0"
                        placeholder="Enter Vote Count"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="totalAccreditedVoters">Total Accredited Voters:</label>
                    <input
                        type="number"
                        id="totalAccreditedVoters"
                        name="totalAccreditedVoters"
                        value={data.totalAccreditedVoters}
                        onChange={handleChange}
                        required
                        min="0"
                        placeholder="Enter Total Accredited Voters"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="totalVotes">Total Valid Votes:</label>
                    <input
                        type="number"
                        id="totalVotes"
                        name="totalVotes"
                        value={data.totalVotes}
                        onChange={handleChange}
                        required
                        min="0"
                        placeholder="Enter Total Valid Votes"
                    />
                </div>

                <button type="submit" className="submit-button">Submit Data</button>
            </form>

            <div className="instructions instructions-bottom">
                <p>
                    After submitting, please review the entered data for accuracy. If you need to make changes, simply edit the fields and resubmit.
                </p>
                <p>
                    For any assistance or inquiries, contact our support team at <a href="mailto:support@electiondata.ng">support@electiondata.ng</a>.
                    Your cooperation is highly appreciated.
                </p>
            </div>
        </div>
    );
};

export default DataInputForm;

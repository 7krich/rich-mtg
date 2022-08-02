import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from './AnimatedPage';

const AppFunnel = () => {

    return (
        <AnimatedPage>
            <div className="app-container">
                <div className="log-container funnel">
                    <div className="app">
                        <h3 className="app-form-title">
                            Helpful Information
                        </h3>
                        <form className="flex app-form">
                        <label 
                            className="drop-input" 
                            for="location"
                        >
                            Your Location:
                        </label>
                        <select id="location" name="Location">
                            <option value="maryland">Maryland</option>
                            <option value="virginia">Virginia</option>
                            <option value="florida">Florida</option>
                            <option value="pennsylvania">Pennsylvania</option>
                        </select>
                            <input
                                className="form-input"
                                placeholder="Estimated Home Value Ex. $350,000"
                                name="Home Value"
                                type="Home Value"
                                id="HomeValue"
                            />
                            <input
                                className="form-input"
                                placeholder="Phone Number"
                                name="Phone Number"
                                type="Phone Number"
                                id="PhoneNumber"
                            />
                            <button className="sub-btn x-pad xb-marg" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default AppFunnel;
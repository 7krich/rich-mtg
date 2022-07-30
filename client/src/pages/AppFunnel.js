import React from 'react';
import { motion } from 'framer-motion';

const AppFunnel = () => {

    return (
        <motion.div className="app-container"
        // framer-motion page transition animation
        animate={{ x: [200, 0] }}
        transition={{ ease: "easeOut", duration: 2 }}
        >
            <div className="app">
                <h3 className="app-form-title">
                    Helpful Information
                </h3>
                <form className="flex app-form">
                    <input
                        className="form-input"
                        placeholder="State"
                        name="State"
                        type="State"
                        id="state"
                    />
                    <input
                        className="form-input"
                        placeholder="Last Name"
                        name="Last Name"
                        type="Last Name"
                        id="lastName"
                    />
                    <input
                        className="form-input"
                        placeholder="E-Mail"
                        name="email"
                        type="email"
                        id="email"
                    />
                    <button className="sub-btn x-pad" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </motion.div>
    )
}

export default AppFunnel;
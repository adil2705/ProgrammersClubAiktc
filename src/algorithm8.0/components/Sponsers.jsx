import React from "react";

import { sponsers } from "../constants";
import { styles } from "../utils/styles";

const Sponsers = () => (
    <div className={`${styles.flexCenter} my-4 sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {sponsers.map((sponsers) => (
                <div key={sponsers.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 hover:brightness-200`}>
                    <img src={sponsers.logo} alt="sponsers_logo" className="sm:w-[192px] w-[100px] object-contain" />
                </div>
            ))}
        </div>
    </div>
);

export default Sponsers;
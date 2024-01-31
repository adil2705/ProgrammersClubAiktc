import { clients } from "../constants";
import { styles } from "../utils/styles";

const Clients = () => (
    <div className={`${styles.flexCenter} my-4 sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client) => (
                <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 hover:brightness-200`}>
                    <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
                </div>
            ))}
        </div>
    </div>
);

export default Clients;
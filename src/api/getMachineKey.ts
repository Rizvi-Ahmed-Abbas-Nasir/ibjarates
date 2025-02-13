import axios from "axios";

const fetchMachineKey = async () => {
  try {
    const res = await axios.get(
      "https://react.senseware.in/API/IbjaRates/MachineKey.aspx"
    );
    return res.data.machineKey;
  } catch (error) {
    console.error("Error fetching machine key:", error);
    return null;
  }
};

export default fetchMachineKey;

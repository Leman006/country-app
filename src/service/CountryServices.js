const BASE_URL = import.meta.env.VITE_BASE_URL

async function getAllCountries() {
    try {
      const res = await fetch('https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json');
      if (!res.ok) {
        throw new Error("Fetch emeliyyatimda xeta bas verdi"); 
      }
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err.message);
    }
  }
  
export {getAllCountries}
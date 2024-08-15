import { useState, useEffect } from "react";

interface Country {
  name: string;
  code: string;
  dial_code: string;
}

export const useCountryList = (): Country[] => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    // Hard-coded country list for demonstration purposes.
    const countryList = [
      { name: "United States", code: "US", dial_code: "+1" },
      { name: "United Kingdom", code: "GB", dial_code: "+44" },
      { name: "Canada", code: "CA", dial_code: "+1" },
      { name: "Australia", code: "AU", dial_code: "+61" },
      { name: "Nigeria", code: "NG", dial_code: "+234" },
      // Add more countries as needed
    ];

    setCountries(countryList);
  }, []);

  return countries;
};

/**
 * Regions, states and major cities served (Henel Engineers serves clients anywhere in India).
 * Used by /service-areas, llms.txt and metadata keywords.
 */

export interface StateArea {
  state: string;
  cities: string[];
}

export interface Region {
  id: string;
  name: string;
  summary: string;
  states: StateArea[];
}

export const regions: Region[] = [
  {
    id: 'south-india',
    name: 'South India',
    summary:
      'Our home region. Kanyakumari District sits in one of India’s most active wind energy belts, and South India combines strong wind and solar resources with heavy monsoon lightning.',
    states: [
      { state: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Tirunelveli', 'Thoothukudi', 'Salem', 'Erode', 'Tiruppur', 'Vellore', 'Nagercoil', 'Kanyakumari'] },
      { state: 'Kerala', cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Kannur'] },
      { state: 'Karnataka', cities: ['Bengaluru', 'Mysuru', 'Hubballi-Dharwad', 'Mangaluru', 'Belagavi', 'Chitradurga', 'Davanagere'] },
      { state: 'Andhra Pradesh', cities: ['Visakhapatnam', 'Vijayawada', 'Tirupati', 'Guntur', 'Anantapur', 'Kurnool'] },
      { state: 'Telangana', cities: ['Hyderabad', 'Warangal', 'Karimnagar', 'Nizamabad'] },
      { state: 'Puducherry', cities: ['Puducherry', 'Karaikal'] },
    ],
  },
  {
    id: 'west-india',
    name: 'West India',
    summary:
      'Gujarat, Maharashtra and Rajasthan are among India’s largest wind and solar markets, with major industrial clusters that need lightning protection and earthing.',
    states: [
      { state: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Jamnagar', 'Bhuj', 'Gandhinagar'] },
      { state: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Chhatrapati Sambhajinagar', 'Satara', 'Kolhapur'] },
      { state: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Jaisalmer', 'Bikaner', 'Udaipur', 'Barmer'] },
      { state: 'Goa', cities: ['Panaji', 'Margao', 'Vasco da Gama'] },
    ],
  },
  {
    id: 'north-india',
    name: 'North India',
    summary:
      'Dense commercial, industrial and residential development across the north creates steady demand for lightning protection, earthing, surge protection and rooftop solar.',
    states: [
      { state: 'Delhi NCR', cities: ['New Delhi', 'Gurugram', 'Noida', 'Faridabad', 'Ghaziabad'] },
      { state: 'Uttar Pradesh', cities: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Prayagraj', 'Meerut'] },
      { state: 'Haryana', cities: ['Panipat', 'Ambala', 'Hisar', 'Karnal'] },
      { state: 'Punjab & Chandigarh', cities: ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar'] },
      { state: 'Uttarakhand & Himachal Pradesh', cities: ['Dehradun', 'Haridwar', 'Shimla', 'Solan'] },
      { state: 'Jammu & Kashmir', cities: ['Jammu', 'Srinagar'] },
    ],
  },
  {
    id: 'central-india',
    name: 'Central India',
    summary:
      'Madhya Pradesh is a growing wind and solar state, and Central India sees some of the country’s highest lightning activity during the monsoon.',
    states: [
      { state: 'Madhya Pradesh', cities: ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Ratlam'] },
      { state: 'Chhattisgarh', cities: ['Raipur', 'Bilaspur', 'Durg-Bhilai', 'Korba'] },
    ],
  },
  {
    id: 'east-india',
    name: 'East & North-East India',
    summary:
      'Odisha, Jharkhand, West Bengal and Bihar are among the states most affected by lightning in India, making proper lightning protection and earthing essential.',
    states: [
      { state: 'West Bengal', cities: ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri'] },
      { state: 'Odisha', cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Sambalpur'] },
      { state: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro'] },
      { state: 'Bihar', cities: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur'] },
      { state: 'Assam & North-East', cities: ['Guwahati', 'Shillong', 'Agartala', 'Imphal'] },
    ],
  },
];

export const allStates = regions.flatMap((r) => r.states.map((s) => s.state));

/** A compact set of city × service keywords for metadata (top cities only). */
export function cityKeywords() {
  const topCities = ['Chennai', 'Bengaluru', 'Hyderabad', 'Mumbai', 'Pune', 'Delhi', 'Ahmedabad', 'Kolkata', 'Coimbatore', 'Kochi', 'Madurai', 'Jaipur'];
  const services = ['lightning arrester', 'earthing contractor', 'solar panel installation', 'windmill maintenance'];
  return topCities.flatMap((c) => services.map((s) => `${s} in ${c}`));
}

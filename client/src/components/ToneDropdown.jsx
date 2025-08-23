import Select from "react-select";

const ToneDropdown = ({ value, onChange }) => {
  const options = [
    { value: "happy", label: "Happy" },
    { value: "sad", label: "Sad" },
    { value: "excited", label: "Excited" },
    { value: "angry", label: "Angry" },
    { value: "romantic", label: "Romantic" },
    { value: "calm", label: "Calm" },
    { value: "funny", label: "Funny" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minWidth: "220px", // control width
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: "180px", // vertical scroll
      overflowY: "auto",
      overflowX: "hidden", // hide horizontal scroll
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "180px",
      overflowY: "auto",
      overflowX: "hidden",
    }),
    option: (provided) => ({
      ...provided,
      whiteSpace: "normal", // wrap long text
    }),
  };

  return (
    <Select
      options={options}
      value={options.find((option) => option.value === value)}
      onChange={onChange}
      isSearchable
      placeholder="Select Mood..."
      styles={customStyles}
      menuPortalTarget={document.body} // ensures dropdown is always on top
      menuPosition="fixed"
    />
  );
};

export default ToneDropdown;

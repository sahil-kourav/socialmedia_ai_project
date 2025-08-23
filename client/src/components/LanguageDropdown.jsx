import Select from "react-select";
import ISO6391 from "iso-639-1";

const LanguageDropdown = ({ value, onChange }) => {
  const options = ISO6391.getAllNames().map((name, index) => ({
    value: ISO6391.getAllCodes()[index],
    label: name,
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minWidth: "220px", // set a minimum width
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: "200px", // vertical scroll height
      overflowY: "auto",
      overflowX: "hidden", // hide horizontal scroll
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "200px",
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
      placeholder="Select a language..."
      styles={customStyles}
      menuPortalTarget={document.body} // prevents dropdown from being cut off
      menuPosition="fixed"
    />
  );
};

export default LanguageDropdown;

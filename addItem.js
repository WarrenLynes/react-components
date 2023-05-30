function AddItem({ onSubmit, list, placeholder }) {
  const [newItem, setNewItem] = React.useState('');

  const handleChange = (event) => {
    setNewItem(event.target.value);
  }
  const handleSubmit = () => {
    if (list) {
      onSubmit(list, newItem);
    } else {
      onSubmit(newItem);
    }
    setNewItem('');
  }

  const inputStyle = {
    fontSize: '3em',
    margin: '10px'
  };

  return (
    <>
      <input
        type="text"
        style={inputStyle}
        value={newItem}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <button onClick={handleSubmit}>
        ✔️
      </button>
    </>
  );
}
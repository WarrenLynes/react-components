
function ListItem({ item, title }) {
  const [status, setStatus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const style = {
    textDecoration: status ? 'line-through' : 'none',
    fontWeight: hover ? 'bold' : 'normal',
    cursor: 'pointer',
    margin: '10px',
    fontSize: '3em',
  };

  return (
    <h4
      style={style}
      className='list-item'
      onClick={() => setStatus(status ? false : true)}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    > {item} </h4>
  );
}

function List({ list, title, onAddItem }) {
  const listStyle = {
    border: '2px solid',
    borderRadius: '10px',
  }
  return (
    <div style={listStyle}>
      <h2>{title}</h2>
      <AddItem onSubmit={onAddItem} list={title} placeholder='Add Item' />
      {
        list.map((item) => (
          <ListItem item={item} key={item} />
        ))
      }
    </div>
  );
}
const GROCERY_LIST_ITEMS = [
  'Cucumbers',
  'Kale'
];


function App() {
  const [lists, setList] = React.useState({
    'Grocery List': [...GROCERY_LIST_ITEMS]
  });

  const handleAddList = (listTitle) =>
    setList({
      ...lists,
      [listTitle]: []
    })

  const handleAddItem = (list, newItem) =>
    setList({
      ...lists,
      [list]: [newItem, ...lists[list]]
    })

  return (
    <div className="app">
      <AddItem onSubmit={handleAddList} placeholder='Add List' />
      {
        Object.keys(lists).map((list) =>
          <List
            list={lists[list]}
            title={list}
            onAddItem={handleAddItem}
          />
        )
      }

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
import Delete from './Button/Delete';

function App() {
  return (
    <div>
      <div><Delete colordelete="red" titledelete="Xóa" handleClickDelete={handleDelete}/></div>
      </div>
  );
}

function handleDelete () {
  alert("xóa rồi");
}

export default App;

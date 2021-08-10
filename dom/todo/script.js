document.getElementById("form").addEventListener("submit", handleTodo);
function handleTodo(ev) {
  ev.preventDefault();
  const value = ev.target[0].value;
  const previousTodos = JSON.parse(localStorage.getItem("todo"));
  if (!previousTodos) {
    localStorage.setItem(
      "todo",
      JSON.stringify([{ name: value, attempts: 10, score: 12 }])
    );
    return;
  }

  localStorage.setItem("todo", JSON.stringify([...previousTodos, { value }]));
}

function userToItem(userObject) {
  return `
    <li class="user-list-item">
      <a href='/users/${userObject.id}/todos'>${
    userObject.name
  }</a><ahref="">(edit)</a></li>
`;
}

function userList(arrayOfUsers) {
  const userItems = arrayOfUsers.map(userToItem).join("");

  return `
        <ul>${userItems}<ul>
    `;
}

module.exports = userList;

const Contact = ({ userName, userNumber, userId, onDelete }) => {
  return (
    <li>
      <div>
        <p>{userName}</p>
        <p>{userNumber}</p>
      </div>
      <button type="button" onClick={() => onDelete(userId)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

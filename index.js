const Notification = props => {
  const {class, url, name} = props;
  return (
      <li className = {class}>
      <img src = {url} />
      <p>{name}</p>
      </li>

  );
};

const element = (
    <div className = "container">
    <h1>Notification</h1>
    <ul>

        <Notification class = "box1" 
            url = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
            name = "Information"
        />
    
    
        <Notification class = "box2"
        url = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        name = "success"
        />

        <Notification class = "box3"
        url = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        name = "warning" />

        <Notification class = "box4"
        url = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        name = "danger" />
    </ul>
</div>
)

ReactDOM.render(element, document.getElementById('root'))

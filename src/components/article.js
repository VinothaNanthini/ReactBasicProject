import React from 'react';

function Welcome(props) {
  return <h1>Name: {props.name}</h1>;
}

function Article() {
  return (
    <div>
      <Welcome name="Vinotha Nanthini" />
     
    </div>
  );
}

export default Article;

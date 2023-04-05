import React, { Component, useState } from "react";
import { Form, FormGroup, Header, Input } from "semantic-ui-react";
import axios from "axios";


class TextArea extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <Form style={{ margin: "150px" }}>
        <Header
          as="h1"
          content="작성페이지에요"
          textAlign="left"
          style={{ marginBottom: "40px" }}
        ></Header>

        <Form.Input id='doc_title' fluid placeholder="제목을 입력하세요." />
        <Form.Input id='doc_detail' fluid placeholder="문서에 대한 설명을 작성하세요." />
        <input
          type="file"
          multiple
          accept="image/*"
          style={{ marginBottom: "15px" }}
        ></input>
        <Form.TextArea
          id='doc_content'
          placeholder="내용을 작성하세요."
          style={{ minHeight: 500, marginTop: "15px" }}
        />
        <Form.Button onClick={onClickSubmit}>Submit</Form.Button>
      </Form>
    );
  }
}

const onClickSubmit = () => {

  
  var docTitle = document.getElementById('doc_title').value;
  var docContent = document.getElementById('doc_content').value;
  var docDetail = document.getElementById('doc_detail').value;

  axios({
    method: 'POST',
    url: `http://localhost:8080/document`,
    data: {
    
      price: 100000,
      category: 0,
      docTitle: docTitle,
      docContent: docContent,
      docDetail: docDetail,
      docPrivate: true,
      docSellPrice: true
    },
    headers: { 
      "Content-Type": "application/json",

    }
  }).then(function (response) {
    console.log("Heade With Authentication :" + response);
    console.log(response.data)
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.headers)
    console.log(response.config)
  })
  .catch(function (error) {
    console.log("Error : " +error);
  });
}


export default TextArea;

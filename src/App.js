import React, { useState, useEffect, useRef, createRef } from 'react';
import Nav from './components/Nav'
import {
  Pane,
  Position,
  SideSheet,
  IconButton,
  Card,
  Heading,
  TextInput,
  Textarea,
  Paragraph,
  Button,
  Dialog
}
  from 'evergreen-ui'
import CardContainer from './components/CardContainer';

class NoteCard extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isShown : false
      }
    }

     editInputNotes = (id) => {
      console.log(id)
    }
   
render(){
  return (
      <Card
        onClick={(event) =>{ 
          if(event.target === event.currentTarget)  
          this.setState({isShown: true})
        }}
        marginLeft={10}
        marginRight={10}
        marginBottom={10}
        height={300}
        width={150}
        elevation={4}
        borderRadius={20}
        border="default"
        overflow="hidden"
      >
        <Heading wordWrap="break-word" marginLeft={10} marginTop={5}>{this.props.title}</Heading>
        <hr></hr>
        <Paragraph wordWrap="break-word" marginLeft={10} marginTop={5}>{this.props.note}</Paragraph>
        <Button onClick={this.props.onDelete}>Delete</Button>

        <Dialog
          isShown={this.state.isShown}
          onCloseComplete={() => {
            this.setState({isShown: false})
            this.editInputNotes(this.props.id)
          }}
          hasHeader={false}
          hasFooter={false}
        >
          <Pane height={1800} width="100%" >
          <TextInput 
          height={40}
          width="100%"
          name="text-input-name"
          marginBottom={10}
          value={this.props.notesTitle}
          onChange={this.props.onNoteChange}
          />
          <Textarea
          width="100%"
          height="100%"
          name="textarea-1"
          value={this.props.notesNote}
          onChange={this.props.onNoteChange}
          /> 
          </Pane>
        </Dialog>
      </Card>
    
  )}
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isShown : false,
      notes: {title: '', note: ''},
      component: [],
      inputNotes:[]
    }
    //this.prevInput = this.state.inputNotes
  }

   onDelete = (event, id) => {
    if (event.target === event.currentTarget) {
      const newArr = this.state.inputNotes.filter(item => item.id !== id)
      this.setState({inputNotes: newArr})
      console.log(this.state.inputNotes)
    }
  }


  // const prevInput - useRef()
  // useEffect(() => {
  //   prevInput.current = inputNotes
  // })

   onNoteChange = (event) => {
    
    const { name, value } = event.target
    if (name === 'text-input-name') {
      this.setState((prevState) => {
        return {notes: {title: value, note: prevState.notes.note}}
      })
    }
    else if (name === 'textarea-1') {
      this.setState((prevState) => {
        return {notes: {title: prevState.notes.title, note: value}}
      })
    }
  }


  createCard = () => {
    if ((this.state.notes.title !== '' || this.state.notes.note !== '')) {
      this.state.inputNotes.push({ id: Math.random(), title: this.state.notes.title, note: this.state.notes.note })
    }
    const newComponents = [...this.state.component, NoteCard]
    this.setState({component: newComponents})

  }

 render() {
  return (
    <Pane>
      <Nav />
      <CardContainer
        marginLeft={120}
        marginRight={120}
        marginTop={40}
        display="flex"
      >
        <SideSheet
          isShown={this.state.isShown}
          onCloseComplete={() => {
            this.setState({isShown: false})
            this.createCard()

          }}
          position={Position.Right}
          width={400}
        >
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
            <Pane padding={16}>
              <TextInput
                name="text-input-name"
                placeholder="Title"
                height={40}
                width="100%"
                onChange={this.onNoteChange}
                value={this.state.notes.title}
              />
            </Pane>
          </Pane>
          <Pane flex="1" overflowY="scroll" background="tint1" padding={16} height="90%" width="100%">
            <Card
              backgroundColor="white"
              elevation={0}
              height="100%"
              display="flex"
              alignItems="center"
              width="100%"
              justifyContent="center"
            >
              <Textarea
                name="textarea-1"
                placeholder="Start Writing.."
                height="100%"
                width="100%"
                onChange={this.onNoteChange}
                value={this.state.notes.note}
              />
            </Card>
          </Pane>
        </SideSheet>

        <IconButton
          icon="plus"
          iconSize={40}
          onClick={() => this.setState({isShown: true})}
          padding={10}
          height={300}
          width={150}
          elevation={4}
          borderRadius={20}
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="default"
        />
        {this.state.component.map((NoteCard, i) => {
          if (this.state.inputNotes[i] && (this.state.inputNotes[i].title !== '' || this.state.inputNotes[i].note !== '') &&
            (this.state.inputNotes[i].title !== 'undefined' || this.state.inputNotes[i].note !== 'undefined')
          ) {
            return (<NoteCard
              key={i}
              title={this.state.inputNotes[i].title}
              note={this.state.inputNotes[i].note}
              onDelete={(event) => this.onDelete(event, this.state.inputNotes[i].id)}
              id={this.state.inputNotes[i].id}
              onNoteChange={this.onNoteChange}
              notesTitle={this.state.notes.title}
              notesNote={this.state.notes.note}
            />)
          }
        }
        )}

      </CardContainer>
    </Pane>
  )}

}


export default App;

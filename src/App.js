import React, { useState, useEffect, useRef } from 'react';
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

const NoteCard = props => {
    const [isShown, setIsShown] = useState(false)

  return (
      <Card
        onClick={(event) =>{ 
          if(event.target === event.currentTarget)  
          setIsShown(true)
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
        <Heading wordWrap="break-word" marginLeft={10} marginTop={5}>{props.title}</Heading>
        <hr></hr>
        <Paragraph wordWrap="break-word" marginLeft={10} marginTop={5}>{props.note}</Paragraph>
        <Button onClick={props.onDelete}>Delete</Button>

        <Dialog
          isShown={isShown}
          onCloseComplete={() => setIsShown(false)}
          hasHeader={false}
          hasFooter={false}
        >
          <Pane height={1800} width="100%" >
          <TextInput 
          height={40}
          width="100%"
          name="text-input-name"
          marginBottom={10}
          />
          <Textarea
          width="100%"
          height="100%"
          name="textarea-1"
          /> 
          </Pane>
        </Dialog>
      </Card>
    
  )
}

function App() {
  const [isShown, setIsShown] = useState(false)
  const [notes, setNotes] = useState({ title: '', note: '' })
  const [component, setComponent] = useState([])
  const [inputNotes, setInputNotes] = useState([])

  const onDelete = (event, id) => {
    if (event.target === event.currentTarget) {
      const newArr = inputNotes.filter(item => item.id !== id)
      setInputNotes(newArr)
      console.log(inputNotes)
    }
  }


  const prevInput = useRef()
  useEffect(() => {
    prevInput.current = inputNotes
  })

  const onNoteChange = (event) => {
    const { name, value } = event.target
    if (name === 'text-input-name') {
      setNotes({ ...notes, ...{ title: value } })
    }
    else if (name === 'textarea-1') {
      setNotes({ ...notes, ...{ note: value } })
    }
  }


  const createCard = () => {
    if ((notes.title !== '' || notes.note !== '')) {
      inputNotes.push({ id: Math.random(), title: notes.title, note: notes.note })
    }
    const newComponents = [...component, NoteCard]
    setComponent(newComponents)

  }
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
          isShown={isShown}
          onCloseComplete={() => {
            setIsShown(false)
            createCard()

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
                onChange={onNoteChange}
                value={notes.title}
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
                onChange={onNoteChange}
                value={notes.note}
              />
            </Card>
          </Pane>
        </SideSheet>

        <IconButton
          icon="plus"
          iconSize={40}
          onClick={() => setIsShown(true)}
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
        {component.map((NoteCard, i) => {
          if (inputNotes[i] && (inputNotes[i].title !== '' || inputNotes[i].note !== '') &&
            (inputNotes[i].title !== 'undefined' || inputNotes[i].note !== 'undefined')
          ) {
            return (<NoteCard
              key={i}
              title={inputNotes[i].title}
              note={inputNotes[i].note}
              onDelete={(event) => onDelete(event, inputNotes[i].id)}
              onNoteChange={onNoteChange}
            />)
          }
        }
        )}

      </CardContainer>
    </Pane>
  )
}

export default App;

import React, { useState } from 'react';
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
  Paragraph
}
  from 'evergreen-ui'
import CardContainer from './components/CardContainer';


function App() {
  const [isShown, setIsShown] = useState(false)
  const [title, setTitle] = useState('')
  const [textarea, setTextarea] = useState('')

  const onTextInputChange = event => {
    setTitle(event.target.value)
  }

  const onTextAreaChange = event => {
    setTextarea(event.target.value)
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
                onChange={onTextInputChange}
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
                onChange={onTextAreaChange}
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
        <Card
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
          <Heading wordWrap="break-word" marginLeft={10} marginTop={5}>{title}</Heading>
          <hr></hr>
        <Paragraph wordWrap="break-word" marginLeft={10} marginTop={5}>{textarea}</Paragraph>
        </Card>
      </CardContainer>
    </Pane>
  )
}

export default App;

import React, { useState } from 'react'
import Title from 'src/components/Title'
import Input from 'src/components/Input/Input'
import Header from 'src/components/Header'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { CREATE_MY_POST } from 'src/actions/actions'
import {
  StyledAddPostContainer,
  StyledFormContainer,
  StyledLinkContainer,
  StyledContentContainer,
} from './styled'
import ImageUploading from 'react-images-uploading';

const AddPost = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [lesson_num, setLesson_num] = useState(0)
  const [image, setImage] = useState('')
  const [description, setDecription] = useState("")
  const [text, setText] = useState("")
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <StyledAddPostContainer>
      <Header></Header>
      <StyledContentContainer>
        <Title customClass='title_addPost'> Add Post</Title>
        <StyledLinkContainer onClick={() => navigate('/my-posts')}> My Posts
        </StyledLinkContainer>
        <StyledLinkContainer onClick={() => navigate('/posts')}>Back to Blog
        </StyledLinkContainer>

        <StyledFormContainer >
          <Input type='text' value={title} placeholder='text' label='Title' onChange={setTitle} />
          <Input type='text' value={lesson_num} placeholder='text' label='Lesson number' onChange={setLesson_num} />
         <></>
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button
                  style={isDragging ? { color: 'red' } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                <button style={{marginTop: "10px"}} onClick={onImageRemoveAll}>Remove image</button>
              </div>
            )}
          </ImageUploading>
          <Input type='text' value={description} placeholder='text' label='Description' onChange={setDecription} />
          <Input type='text' value={text} placeholder='text' label='Text' onChange={setText} />
          <StyledLinkContainer onClick={() => {
            navigate('/my-posts')
            dispatch(CREATE_MY_POST({
              description,
              image, lesson_num, title, text
            }))
          }}>Add Post</StyledLinkContainer>
        </StyledFormContainer>
      </StyledContentContainer>

      <footer>
        <div>2022</div>
        <div>All rights reserved</div>
      </footer>
    </StyledAddPostContainer>
  )
}

export default AddPost

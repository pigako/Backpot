import React, { useEffect, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import Helmet from 'react-helmet';
import { useRouter } from 'next/router';

import Button from '../components/designs/Button';
import {
  LOAD_BOARD_REQUEST,
  DELETE_BOARD_REQUEST,
  UPDATE_BOARD_REQUEST,
  ADD_COMMENT_REQUEST,
} from '../reducers/board';
import CommentCard from '../components/CommentCard';

const SBoard = styled.div`
  width: 98%;
  margin-top: 10px;
`;
const SDetailBoardTitle = styled.h1`
  display: inline-block;
  font-weight: bold;
  margin-left: 10px;
  width: 100%;
`;
const SBoardTop = styled.div`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: solid 2px #6441a5;
`;
const SBoardTitle = styled.div`
  display: inline-block;
`;
const SBoardTitleLabel = styled.label`
  display: block;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const SBoardWriterLabel = styled.label`
  padding-right: 1rem;
  border-right: solid 1px #495057;
  & > strong {
    font-weight: bold;
  }
`;
const SBoardCreateLabel = styled.label`
  padding-left: 1rem;
`;
const SBoardTitleButtonDiv = styled.div`
  float: right;
`;
const SBoardContent = styled.div`
  margin: 1.5rem;

  & > div {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
const SBoardComment = styled.div`
  border-top: solid 3px #6441a5;
`;
const SBoardCommentCountDiv = styled.div`
  height: 2rem;
  background: #e7e7e7;
  display: flex;
  align-items: center;
  border-bottom: solid 3px #6441a5;
  & > label {
    font-size: 1rem;
    font-weight: bold;
    margin-left: 1rem;
  }
`;

const CommentDiv = styled.div`
  height: 330px;
`;

const CommentButton = styled(Button)`
  width: 8rem;
  margin-right: 1.5rem;
  float: right;
`;

const LoadingImg = styled.img`
  margin-top: 4px;
  height: 1.5rem;
`;

const DetailBoard = () => {
  const {
    boardDeleted,
    board,
    isUpdatingBoard,
    isAddingComment,
    commentAdded,
  } = useSelector(state => state.board);
  const { id: myId } = useSelector(state => state.user.me) || false;
  const dispatch = useDispatch();
  const router = useRouter();

  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [editorLoded, setEditorLoded] = useState(false);

  const [userComment, setUserComment] = useState('');
  const [updateText, setUpdateText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
    setEditorLoded(true);
  }, []);

  useEffect(() => {
    if (boardDeleted) {
      router.push('/board');
    }
  }, [boardDeleted]);

  useEffect(() => {
    if (commentAdded) {
      setUserComment('');
    }
  }, [commentAdded]);

  const onUpdateBoard = useCallback(
    e => {
      if (isUpdating) {
        dispatch({
          type: UPDATE_BOARD_REQUEST,
          data: {
            id: board.id,
            content: updateText,
          },
        });
        setIsUpdating(false);
      } else {
        setIsUpdating(true);
      }
    },
    [isUpdating, board && board.id, updateText],
  );

  const onUpdateBoardCancle = useCallback(
    e => {
      setIsUpdating(false);
      setUpdateText(board && board.content);
    },
    [isUpdating],
  );

  const onDeleteBoard = useCallback(
    e => {
      dispatch({
        type: DELETE_BOARD_REQUEST,
        boardId: board.id,
      });
    },
    [board && board.id],
  );

  const onCreateComment = useCallback(
    e => {
      if (!userComment.trim()) {
        return;
      }
      dispatch({
        type: ADD_COMMENT_REQUEST,
        data: {
          boardId: board.id,
          content: userComment,
        },
      });
    },
    [board && board.id, userComment],
  );
  return (
    <SBoard>
      <Helmet>
        <title>{board && board.title}</title>
        <style type="text/css">
          {`
            .ck-editor__editable { height: 200px;}
            .ck.ck-reset.ck-editor.ck-rounded-corners {margin: 1.5rem;}
          `}
        </style>
      </Helmet>
      <SDetailBoardTitle>추천게시글</SDetailBoardTitle>
      <SBoardTop>
        <SBoardTitle>
          <SBoardTitleLabel>{board && board.title}</SBoardTitleLabel>
          <SBoardWriterLabel>
            <strong>{board && board.User.nickname}</strong> 님
          </SBoardWriterLabel>
          <SBoardCreateLabel>
            {moment(board && board.createdAt).format('YY.MM.DD HH시 mm분')}
          </SBoardCreateLabel>
        </SBoardTitle>
        {myId === (board && board.User.id) ? (
          <SBoardTitleButtonDiv>
            {isUpdating ? (
              <Button onClick={onUpdateBoardCancle}>취소</Button>
            ) : null}
            <Button onClick={onUpdateBoard}>
              {isUpdatingBoard ? (
                <LoadingImg src="/static/icons/loading_blue.gif" />
              ) : (
                `수정`
              )}
            </Button>
            <Button color={'pink'} onClick={onDeleteBoard}>
              삭제
            </Button>
          </SBoardTitleButtonDiv>
        ) : null}
      </SBoardTop>
      <SBoardContent>
        {isUpdating ? (
          editorLoded ? (
            <CKEditor
              key={'board'}
              editor={ClassicEditor}
              data={board && board.content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setUpdateText(data);
              }}
            />
          ) : (
            <p>Editor Loding</p>
          )
        ) : (
          <div dangerouslySetInnerHTML={{ __html: board && board.content }} />
        )}
      </SBoardContent>
      <SBoardComment>
        <SBoardCommentCountDiv>
          <label>댓글 {board && board.Comments.length}개</label>
        </SBoardCommentCountDiv>

        {board &&
          board.Comments.map(comment => {
            return <CommentCard key={+comment.id} comment={comment} />;
          })}
      </SBoardComment>
      {myId && (
        <CommentDiv>
          {editorLoded ? (
            <CKEditor
              key={'comment'}
              editor={ClassicEditor}
              data={userComment}
              onChange={(event, editor) => {
                const data = editor.getData();
                setUserComment(data);
              }}
            />
          ) : (
            <p>Editor Loding</p>
          )}
          <CommentButton onClick={onCreateComment}>
            {isAddingComment ? (
              <LoadingImg src="/static/icons/loading_blue.gif" />
            ) : (
              `댓글쓰기`
            )}
          </CommentButton>
        </CommentDiv>
      )}
    </SBoard>
  );
};

DetailBoard.getInitialProps = context => {
  const id = parseInt(context.query.id, 10);
  context.store.dispatch({
    type: LOAD_BOARD_REQUEST,
    boardId: id,
  });
};

export default DetailBoard;

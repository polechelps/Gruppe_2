import React, { useContext, useState } from 'react'
import { TodosContext } from './App'
import { SwipeListView } from 'react-native-swipe-list-view';
import { Header, Item, Input } from 'native-base';
import { StyleSheet, TouchableOpacity, View, Text, Button } from 'react-native';
import uuid from 'uuid-random';

export default function ToDoList() {
    const {state, dispatch} = useContext(TodosContext);
    const [todoText, setTodoText] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [editTodo, setEditTodo] = useState(null)
    const buttonTitle = editMode ? "Edit" : "Add";

    const handleSubmit = () =>{
        if(editMode){
            dispatch({type: 'edit', payload:{...editTodo,text:todoText}})
            setEditMode(false)
            setEditTodo(null)
        }
        else{
            const newToDo = {id: uuid(), text: todoText};
            dispatch({type: 'add', payload: newTodo})
        }
        setTodoText('')
    }

    const renderItem = data => (
        <View style={StyleSheet.rowFront}>
            <Text>{data.item.text}</Text>
        </View>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={StyleSheet.rowBack}>
            <TouchableOpacity onPress={() => editRow(data.item, rowMap)}>
                <Text>Endre</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.backRightBtn]}
            onPress={(() => deleteRow(data.item))}
            >
                <Text style={{color: '#FFF'}}>Slett</Text>
            </TouchableOpacity>
        </View>
    );

    const deleteRow = (todo) => {
        dispatch({type:'delete',payload:todo});
    };

    const editRow = (todo,rowMap) => {
        setTodoText(todo.text)
        setEditMode(true)
        setEditTodo(todo)
        if (rowMap[todo.id]) {
            rowMap[todo.id].closeRow();
        }
    };

    return (
        <View>
            <Header searchBar>
                <Item>
                    <Input
                        placeholder="Skriv inn ting å gjøre"
                        onChangeText={text => setTodoText(text)}
                        value={todoText}
                    />
                </Item>
                <Button transparent onPress={handleSubmit} title={buttonTitle} />
            </Header>

            <SwipeListView
                data={state.todos}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-75}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderBottomWidth: 0.25,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        backgroundColor: 'red',
        right: 0
    }
});
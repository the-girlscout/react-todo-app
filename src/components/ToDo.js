import React from 'react';
import './todoItem.css';

function showId(propis) {
    console.log("in ToDo.js function showId: ", propis.id );
    propis.removeTaskAppToDo(propis.id);
}

function showId2(propis) {
    return function(e) {
        console.log("in ToDo.js function showId2: ", propis.id);
    }
}

function showId3(e) {
    console.log("in ToDo.js function showId3: ", e.target.id);//e.target.id funktioniert nur, wenn das Attribut im <button> auch id heißt
}


function showId4(propis) {
    console.log("in ToDo.js function showId4: ", propis.id);//wird beim Laden der Seite ausgeführt
}


/*
Infos zu showId5:
Folgendes entspricht der inline Arrow-Function Variante von Version 1: onClick={(event) => showId(props)}

function(event){
    return showId(props);
}

Aber eine anonyme Funktion kann man erstens nicht aufrufen, zweitens nicht einfach so dastehen ohne einen Namen. 
Lösung für ertens: Eine zweite Funktion drumherum.
Lösung für zweitens: Die anonyme Funktion muss returned werden, damit die Syntax gültig wird.
Übrigens: Da das event nicht benötigt wird, müsste es auch nicht mittels e mitübergeben werden. Stattdessen leere Klammern.
*/
function showId5(propis){     
    return function(e) {
        //console.log("in ToDo.js function showId5:  ", propis.id);
        showId(propis);
    }
}

/* Nachfolgend andere Varianten von Version 5:
const showId5 = (propis) => (e) => {     //same as showId2, only shorter
    showId(propis);
}

const showId5 = function(props){
     return function(e) {
        showId(props);
    }    
}
*/




const ToDo = (props) => {
    console.log("in ToDo.js const ToDo", props);
    return (
        <div>
            <button className="removeTodo" onClick={(event) => showId(props)}>Remove</button>{/* ohne (event) => klappt es nicht */}
           {/*} <button onClick={ showId2(props) }>t2</button>
            <button id={'hallo'} onClick={showId3} >t3</button>
            <button onClick={ showId4(props) } >t4</button>
    <button onClick={ showId5(props) } >t5</button>*/}
            Text: {props.children} | ID: {props.id}
        </div>
    )
}

export default ToDo;
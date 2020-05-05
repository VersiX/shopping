import React from 'react';

function ListItem(props) {

    return <li className="list-item">
        <label className="item" for={"check" + props.num}>
            <input className="item-checkbox" type="checkbox" name="conditions" id={"check" + props.num} />
            <span className="item-name">
                {props.name}
            </span>
            {props.comment && <span className="item-comment">
                {props.comment}
            </span>}
        </label>
    </li>
}

function ShoppingList(props) {
    return <ul className="list">
        <ListItem num="1" name="A lot of pickles" comment="for the next lessons about CSS" />
        <ListItem num="2" name="0 apples" comment="for more CSS manipulations" />
        <ListItem num="3" name="20 oranges" comment="because they are awesome" />
        <ListItem num="4" name="13 plates" comment="hm... they always disappear" />
        <ListItem num="5" name="15 bentos" />
        <ListItem num="6" name="1 bootle of Sake ^_^" comment="for my friends" />
    </ul>
}

function ListHeader(props) {
    return <header className="header">
        <h1 className="header-title">{props.title}</h1>
        <h4 className="header-subtitle">{props.subtitle}</h4>
    </header>
}

function Submit(props) {
    return <a className="appetit" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Bon appetit :)</a>

}

function ListContainer(params) {
    return <div className="container">
        <ShoppingList />
        <Submit />
    </div>
}

function List(params) {
    return <div className="content">
        <ListHeader title="CSS Dinner Shopping List" subtitle="Let's go to the mall" />
        <ListContainer />
    </div>
}

export default List;

import React, { Children } from 'react';

// LinkColumn must be sent either content (elements to show) or list (an array of objects with link text and hrefs)
const LinkColumn = (props) => {
    var columnClass = props.parent + "__column" + "-" + props.i;
    var titleClass = props.parent + "__title";
    var linkClass = props.parent + "__column-link";
    var titleElement;

    function getTitle(props){
        switch (props.hlevel) {
            case 2:
                titleElement = (
                    <h2 className={titleClass}>{props.title}</h2>
                )
              break;
            case 3:
                titleElement = (
                    <h3 className={titleClass}>{props.title}</h3>
                )
              break;
            case 4:
                titleElement = (
                  <h4 className={titleClass}>{props.title}</h4>
                )
                break;
            case 5:
                titleElement = (
                    <h5 className={titleClass}>{props.title}</h5>
                )
                break;
            case 6:
                titleElement = (
                    <h6 className={titleClass}>{props.title}</h6>
                )
                break;
          }

    };
    if(props.hlevel) {
        getTitle(props);
    }

    
	return (
			<div className="{columnClass}">
                {props.hlevel && titleElement}
                {props.content ? props.content : props.list.map(link => {return <a className={linkClass} href={link.href}>{link.text}</a>})}
            </div>
	);
};

export default LinkColumn;
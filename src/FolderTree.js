import FolderTree from 'react-folder-tree';



const treeState = {
    name: 'BEL',
    checked: 0.5,   // half check: some children are checked
    isOpen: true,   // this folder is opened, we can see it's children
    children: [
    
      {
        name: 'Western Sector ',
        checked: 0.5,
        isOpen: false,
        children:[
           {name: 'Maharashtra ',
            checked: 0.5,
            isOpen: false,
            children: [
                {name: 'Mumbai ',
                checked: 0.5,
                isOpen: false,
                children:[{name: 'Mumbai School', checked: 0}]

               
        
      
      },
    ],
},
],
      },
    ],
  };

  const treeState2 = {
    name: 'BEL',
    checked: 0.5,   // half check: some children are checked
    isOpen: true,   // this folder is opened, we can see it's children
    children: [
    
      {
        name: 'Southern Sector ',
        checked: 0.5,
        isOpen: false,
        children:[
           {name: 'Tamilnadu',
            checked: 0.5,
            isOpen: false,
            children: [
                {name: 'Chennai ',
                checked: 0.5,
                isOpen: false,
                children:[{name: 'Chennai School', checked: 0},
                {name: 'Chennai hospital', checked: 0},
                {name: 'Chennai bank', checked: 0},
                
            ]

               
        
      
      },
    ],
},
],
      },
    ],
  };


const BasicTree=() => {

    const onTreeStateChange = (state) => console.log ("tree state :" , state);
    return(
        <>
        <FolderTree data={treeState}
         showCheckbox={ false }    // default: true
         
        onChange={onTreeStateChange} />
        <FolderTree data={treeState2}
         showCheckbox={ false }    // default: true
         
        onChange={onTreeStateChange} />

</>
        

    );
}

export default BasicTree;
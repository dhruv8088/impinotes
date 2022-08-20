let btn=document.getElementById('add');

let lsdata = ()=>{
    const textdata= document.querySelectorAll('textarea');
    let notes=[];
    textdata.forEach((note)=>{
        return notes.push(note.value);
    })
    localStorage.setItem('notes',JSON.stringify(notes));
}

let addnote =(text='')=>{
    let note=document.createElement('div');
    note.classList.add('notes');

    let data=` 
    <div class="note">
    <div class="operation">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    <div>
    `;

    note.insertAdjacentHTML('afterbegin',data);

    let edit=note.querySelector('.edit');
    let del=note.querySelector('.delete');
    let main=note.querySelector('.main');
    let textarea=note.querySelector('textarea');

    del.addEventListener('click',()=>{
        note.remove();
        lsdata();
    })
     // for if something is written in text in addnotes it should come.
     textarea.value=text;
     main.innerHTML=text;

    edit.addEventListener('click',()=>{
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    textarea.addEventListener('change',(event)=>{
        const value=event.target.value;
        main.innerHTML=value;
       // local storage data
        lsdata();
    })
    document.body.appendChild(note);
    
}

let notes=JSON.parse(localStorage.getItem('notes'));

if(notes){notes.forEach((note)=> addnote(note))};
btn.addEventListener("click",() => addnote() );
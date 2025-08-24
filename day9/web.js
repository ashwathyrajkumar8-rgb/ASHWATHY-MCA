const con=document.getElementById('container');
const arr=["web anime.png",
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
]

let prev=()=>{
     i--;
    if(i==-1)
    {
        i=5;
    }

    con.style.backgroundImage=`url('${arr[i]}')`;

}

let i=0;
let next=()=>{
   
     i++;
    if(i==6)
    {
        i=0;
    }

    con.style.backgroundImage=`url('${arr[i]}')`;
}
   
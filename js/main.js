	let row=document.getElementById("row");
    

        
        let teamList=[

    {
        'photo':"wayne-barnett-founder-ceo.jpg",
        'name':"Wayne Barnett",
        'job':"Founder & CEO",	
    },

    {
        'photo':"angela-caroll-chief-editor.jpg",
        'name': "Angela Caroll",
        'job': "Chief Editor",
    },

    {
        'photo':"walter-gordon-office-manager.jpg",
        'name': "Walter Gordon",
        'job':"Office Manager",
    },

    {
        'photo':"angela-lopez-social-media-manager.jpg",
        'name': "Angela Lopez",
        'job':"Social Media Manager",
    },

    {
        'photo':"scott-estrada-developer.jpg",
        'name': "Scott Estrada",
        'job':"Developer",
    },

    {
        'photo':"barbara-ramos-graphic-designer.jpg",
        'name': "Barbara Ramos",
        'job':"Graphic Designer",
    },



]

for(i=0; i<teamList.length; i++){

    console.log(teamList[i].photo);
    console.log(teamList[i].name);
    console.log(teamList[i].job);


    createCard(teamList[i]);

    // let teamMember=document.createElement("div");
    // teamMember.innerHTML=(`${teamList[i].photo}, ${teamList[i].name}, ${teamList[i].job}`);
    // row.append(teamMember);

}

function createCard(member){
    let card=document.createElement("div");
    card.classList.add("col-3", "text-center", "m-2", "bg-white","p-0" )
    let img=document.createElement("img");
    img.src= "./img/"+(member.photo);
    img.classList.add( "w-100")
    let name=document.createElement("h4");
    name.innerHTML=(member.name);
    name.classList.add("mt-3")
    let job=document.createElement("p");
    job.innerHTML=(member.job);
    card.append(img, name, job);
    row.append(card);
}
    
 const MENU=[
 {c:"Rice",n:"비빔밥",e:"Bibimbap",l:"ບິບິມບັບ",p:13,s:1,d:"ເຂົ້າຮ້ອນໆ ໃສ່ຜັກປຸງລົດ, ຊີ້ນງົວ, ໄຂ່ດາວ ແລະ ໂກຈູຈາງ.",t:"ຍອດນິຍົມ"},
 {c:"Rice",n:"김밥",e:"Gimbap",l:"ກິມບັບ",p:9,s:0,d:"ເຂົ້າມ້ວນສາຫຼ່າຍ ໄສ້ໄຂ່, ຫົວຜັກກາດດອງ, ຜັກຫົມ ແລະ ແຄຣອດ."},
 {c:"Rice",n:"돌솥비빔밥",e:"Dolsot Bibimbap",l:"ໂດລຊົດ ບິບິມບັບ",p:15,s:1,d:"ເມນູຄລາສສິກດຽວກັນ ເສີບໃນຖ້ວຍຫີນຮ້ອນລະອຸ ມີເຂົ້າກອບຢູ່ກົ້ນຖ້ວຍ."},
 {c:"Soup",n:"김치찌개",e:"Kimchi Jjigae",l:"ກິມຈິຈິເກ",p:12,s:2,d:"ກິມຈິດອງດົນ ຕົ້ມກັບຊີ້ນໝູ ແລະ ເຕົ້າຮູ້ ຈົນລົດເຂັ້ມ ແລະ ເປັ້ຍວນຳ."},
 {c:"Soup",n:"삼계탕",e:"Samgyetang",l:"ສຳເກທັງ",p:17,s:0,d:"ໄກ່ໜຸ່ມທັງໂຕ ຍັດໄສ້ເຂົ້າ, ໂສມ ແລະ ພຸດຊາເກົາຫຼີ ຕົ້ມຫຼາຍຊົ່ວໂມງ.",t:"ເຊັບແນະນຳ"},
 {c:"Soup",n:"설렁탕",e:"Seolleongtang",l:"ໂຊລລົງທັງ",p:14,s:0,d:"ນ້ຳແກງກະດູກງົວສີຂາວນວນ ໃສ່ຊີ້ນສັນ ແລະ ເສັ້ນບາງ ປຸງລົດເອງທີ່ໂຕະ."},
 {c:"Grill",n:"불고기",e:"Bulgogi",l:"ພູໂກກິ",p:19,s:0,d:"ຊີ້ນງົວຫຼັ່ນບາງໆ ໝັກດ້ວຍຊອສຖົ່ວເຫຼືອງ, ໝາກແພຣ໌ ແລະ ງາ ແລ້ວປີ້ງຖ່ານ.",t:"ຍອດນິຍົມ"},
 {c:"Grill",n:"삼겹살",e:"Samgyeopsal",l:"ຊຳກຽບຊັນ",p:21,s:0,d:"ສາມຊັ້ນໝູໜາ ປີ້ງທີ່ໂຕະ ຫໍ່ກັບຜັກສະລັດ, ຜັກທຽມ ແລະ ຊອສຊຳຈັງ."},
 {c:"Grill",n:"갈비",e:"Galbi",l:"ການບີ",p:26,s:0,d:"ຊີ່ໂຄງງົວໝັກຊອສຖົ່ວເຫຼືອງຫວານ ປີ້ງໄຟຈົນເປັນເງົາ."},
 {c:"Noodles",n:"잡채",e:"Japchae",l:"ຊັບແຊ",p:13,s:0,d:"ເສັ້ນວຸ້ນຜັດກັບຜັກ ແລະ ຊີ້ນງົວ ໃນນ້ຳມັນງາ."},
 {c:"Noodles",n:"냉면",e:"Naengmyeon",l:"ແນງມຽນ",p:13,s:1,d:"ເສັ້ນບັກວີດໜຽວນຸ້ມ ໃນນ້ຳແກງເຢັນຈັດ ເປັ້ຍໆ ໃສ່ໝາກແພຣ໌ ແລະ ໄຂ່."},
 {c:"Sides",n:"떡볶이",e:"Tteokbokki",l:"ຕັອກບົກກີ",p:10,s:2,d:"ເຂົ້າຈີ່ເກົາຫຼີໜຽວນຸ້ມ ໃນຊອສພິກແດງ ຫວານ ແລະ ເຜັດຮ້ອນ."},
 {c:"Sides",n:"파전",e:"Pajeon",l:"ປາຈອນ",p:11,s:0,d:"ເຂົ້າໜົມແປ້ງຕົ້ນຫອມກອບ ໃສ່ອາຫານທະເລ ກິນກັບນ້ຳຈິ້ມຖົ່ວເຫຼືອງ."},
 {c:"Sides",n:"김치",e:"Kimchi",l:"ກິມຈິ",p:5,s:1,d:"ຜັກກາດຂາວດອງເອງ ໝັກທຸກອາທິດ."},
 {c:"Drinks",n:"식혜",e:"Sikhye",l:"ຊິເຮ",p:5,s:0,d:"ເຄື່ອງດື່ມເຂົ້າຫວານເຢັນໆ ລົດຫວານນຸ້ມແບບມອລ໌ດ."},
 {c:"Drinks",n:"수정과",e:"Sujeonggwa",l:"ຊູຈອງກວາ",p:5,s:0,d:"ນ້ຳຂີງ ແລະ ອົບເຊີຍ ປະດັບດ້ວຍເມັດສົນ."}
];

const ART={
"Bibimbap":["ring","#F6F3E8","#1F5F66",["#5E8F3E","#E0822B","#E9DDB0","#6B4A32","#3E2A22","#9CC06B","#E9DDB0","#7A5A8C"],1],
"Gimbap":["roll","#EFEFE6","#B3262D",["#F2C230","#5E8F3E"]],
"Dolsot Bibimbap":["ring","#F6F3E8","#2B2B2B",["#5E8F3E","#E0822B","#E9DDB0","#6B4A32","#3E2A22","#9CC06B","#E9DDB0","#7A5A8C"],1],
"Kimchi Jjigae":["pile","#C23A25","#2B2B2B",["#F6F3E8","#F6F3E8","#E9DDB0","#8E1C22","#5E8F3E","#E9DDB0"]],
"Samgyetang":["pile","#EAD9A8","#6B4A32",["#F3E3C0","#F3E3C0","#B3262D","#C98A4B","#F6F3E8"]],
"Seolleongtang":["pile","#F2EFE6","#1F5F66",["#8C5A3C","#8C5A3C","#5E8F3E","#E9DDB0"]],
"Bulgogi":["strips","#EFEFE6","#17282A",["#6B3B22","#8A4B2A","#5A2F1C","#7B4224"]],
"Samgyeopsal":["strips","#EFEFE6","#B3262D",["#E9B3A0","#D9917A","#EBC1AE","#CE8068"]],
"Galbi":["strips","#EFEFE6","#1F5F66",["#7A3A1F","#5A2A15","#8B4B2A"]],
"Japchae":["lines","#EFEFE6","#B3262D",["#6B4A32","#5A3E2A","#8A6A4A","#6B4A32","#5E8F3E"]],
"Naengmyeon":["lines","#E8F1EE","#1F5F66",["#C9B58A","#B8A57A","#D6C59A","#C9B58A","#E0822B"]],
"Tteokbokki":["pile","#C8321F","#2B2B2B",["#F6E2C0","#F6E2C0","#F6E2C0","#F6E2C0","#5E8F3E","#F6E2C0","#E9C79B"]],
"Pajeon":["pile","#D9A441","#6B4A32",["#5E8F3E","#5E8F3E","#9CC06B","#E0822B","#5E8F3E","#9CC06B"]],
"Kimchi":["pile","#F6F3E8","#1F5F66",["#C23A25","#D8482F","#A92D1E","#C23A25","#E7C8B0"]],
"Sikhye":["pile","#E8D9B0","#6FA8A3",["#FBF7EA","#FBF7EA","#FBF7EA","#FBF7EA","#FBF7EA","#FBF7EA","#FBF7EA","#FBF7EA"],0,.5],
"Sujeonggwa":["pile","#8A4B2A","#6FA8A3",["#F3E3C0","#F3E3C0","#F3E3C0","#B3262D"],0,.8]
};
function thumb(e){
  const [mode,inner,rim,cols,egg,k=1]=ART[e],n=cols.length;let g="";
  if(mode==="ring")cols.forEach((c,i)=>g+=`<ellipse cx="50" cy="27" rx="8" ry="11" fill="${c}" transform="rotate(${i*360/n} 50 50)"/>`);
  if(mode==="pile")cols.forEach((c,i)=>{const a=i*2.4,r=6+(i*9)%24,x=50+Math.cos(a)*r,y=50+Math.sin(a)*r;
    g+=`<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(8+i%3*2)*k}" ry="${(6+i%2*3)*k}" fill="${c}" transform="rotate(${i*40} ${x.toFixed(1)} ${y.toFixed(1)})"/>`});
  if(mode==="lines")cols.forEach((c,i)=>g+=`<path d="M20 ${30+i*10}q15-10 30 0t30 0" stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round"/>`);
  if(mode==="strips")cols.forEach((c,i)=>g+=`<g transform="rotate(${-28+i*20} ${50+(i%2)*6-3} ${32+i*12})"><rect x="${35+(i%2)*6-3}" y="${27+i*12}" width="32" height="10" rx="5" fill="${c}"/><path d="M${42+(i%2)*6} ${29+i*12}v6m7-6v6m7-6v6" stroke="#0008" stroke-width="1.5"/></g>`);
  if(mode==="roll")[[30,36],[62,40],[46,68]].forEach(([x,y])=>g+=`<circle cx="${x}" cy="${y}" r="15" fill="#1B1B1B"/><circle cx="${x}" cy="${y}" r="11.5" fill="#F6F3E8"/><circle cx="${x-3}" cy="${y-2}" r="4" fill="${cols[0]}"/><circle cx="${x+4}" cy="${y+3}" r="3" fill="${cols[1]}"/><circle cx="${x+3}" cy="${y-5}" r="2" fill="#E0822B"/>`);
  if(egg)g+=`<ellipse cx="50" cy="50" rx="17" ry="16" fill="#fff"/><circle cx="51" cy="50" r="8" fill="#F2A71B"/><circle cx="48" cy="47" r="2.5" fill="#fff" opacity=".5"/>`;
  return `<svg viewBox="0 0 100 100" role="img" aria-label="ຮູບແຕ້ມ ${e}"><rect width="100" height="100" fill="#123F45"/><circle cx="50" cy="50" r="48" fill="${rim}"/><circle cx="50" cy="50" r="42" fill="${inner}"/>${g}</svg>`;
}
const CAT={All:"ທັງໝົດ",Rice:"ເຂົ້າ",Soup:"ແກງ",Grill:"ປີ້ງ",Noodles:"ເສັ້ນ",Sides:"ເຄື່ອງຄຽງ",Drinks:"ເຄື່ອງດື່ມ"};
const cats=["All",...new Set(MENU.map(m=>m.c))];
let cat="All",order=[];
const $=id=>document.getElementById(id);

function renderTabs(){
  $("tabs").innerHTML=cats.map(c=>`<button class="tab" aria-pressed="${c===cat}" data-c="${c}">${CAT[c]}</button>`).join("");
}
function renderList(){
  const mild=$("mild").checked;
  const items=MENU.filter(m=>(cat==="All"||m.c===cat)&&(!mild||m.s===0));
  $("list").innerHTML=items.length?items.map(m=>{
    const i=MENU.indexOf(m);
    return `<article class="dish">
      <div class="pic">${thumb(m.e)}</div>
      <h3><span lang="ko">${m.n}</span><small>${m.l}</small>${m.t?`<span class="tag">${m.t}</span>`:""}</h3>
      <span class="price">$${m.p}</span>
      <p>${m.d} ${m.s?`<span class="chili" title="ລະດັບຄວາມເຜັດ ${m.s}" aria-label="ລະດັບຄວາມເຜັດ ${m.s}">${"●".repeat(m.s)}</span>`:""}</p>
      <button class="add" data-i="${i}">ເພີ່ມ</button>
    </article>`}).join(""):`<p class="empty">ບໍ່ພົບເມນູທີ່ຕົງກັນ. ປິດໂຕກອງເມນູເຜັດເພື່ອເບິ່ງເພີ່ມ.</p>`;
}
function renderOrder(){
  const box=$("order");
  box.hidden=!order.length;
  const total=order.reduce((a,i)=>a+MENU[i].p,0);
  $("sum").textContent=`${order.length} ເມນູ · $${total}`;
}
$("tabs").addEventListener("click",e=>{const b=e.target.closest(".tab");if(!b)return;cat=b.dataset.c;renderTabs();renderList()});
$("mild").addEventListener("change",renderList);
$("list").addEventListener("click",e=>{const b=e.target.closest(".add");if(!b)return;order.push(+b.dataset.i);renderOrder()});
$("clear").addEventListener("click",()=>{order=[];renderOrder()});
renderTabs();renderList();renderOrder();

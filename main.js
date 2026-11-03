const caseStudies = {
  boikhutso: {label: '01 / FULL WEBSITE BUILD · MINING & ENGINEERING',title:'Boikhutso Mining',intro:'A complete corporate web presence for a mining support and engineering business.',brief:'Create an accessible, structured online home that clearly explains the company and its mining and engineering services and makes it easier to enquire.',contributions:['Designed and developed the WordPress site from scratch using Elementor.','Built core business pages and structured services and company content.','Configured hosting and domain setup for the production launch.','Worked on site usability, responsive presentation and maintainability.'],technical:'WordPress provided an editable content foundation, while Elementor supported scalable page construction. The project included hosting and domain configuration as well as front-end execution.',tags:['WordPress','Elementor','Responsive design','Hosting','Domain setup'],live:'https://boikhutsomining.co.za/'},
  omni: {label:'02 / WEBSITE REVAMP & SUPPORT · MANAGED IT',title:'Omni Secure',intro:'Supporting the website for an IT services company presenting a Microsoft-first managed services offering.',brief:'Help communicate managed IT services with a clearer, responsive and professionally maintained web presence.',contributions:['Contributed to responsive page development and site improvements.','Supported layout, messaging and usability refinements.','Performed website maintenance and troubleshooting.','Provided domain, email and related technical support as part of the wider role.'],technical:'Ongoing collaborative work combining WordPress website updates with real operational support, including domain and email troubleshooting. This is not presented as a solo rebuild.',tags:['WordPress','Responsive UI','Site maintenance','Technical support'],live:'https://omnisecure.co.za/'},
  wideview: {label:'03 / WEBSITE REVAMP · PROPERTY MANAGEMENT',title:'Wideview Property',intro:'Making a property management company’s services clearer across the website experience.',brief:'Refine an existing WordPress site for a residential block and estate management company, with consistent visual hierarchy and straightforward access to service information.',contributions:['Revamped production pages using the Divi theme builder.','Improved visual consistency and content organisation.','Refined responsive layout and usability across screen sizes.','Supported performance-focused improvements and site maintenance.'],technical:'The project involved targeted improvement of an existing WordPress and Divi implementation. Wideview manages residential blocks and estates; it is not a property-listings marketplace.',tags:['WordPress','Divi','Responsive layouts','UI / UX','Site optimisation'],live:'https://wideviewproperty.com/'},
  proudly: {label:'04 / WEBSITE REVAMP & SUPPORT · CONSULTING',title:'Proudly Associated',intro:'Improving the digital presence of a consultancy and business-development brand.',brief:'Bring greater visual consistency and clearer user journeys to an existing company website while maintaining its operational stability.',contributions:['Revamped WordPress pages with Divi.','Improved page hierarchy, responsiveness and content flow.','Supported content publishing activities and routine maintenance.','Performed backups and regular website checks.'],technical:'Rather than a full rebuild, this was iterative development of an existing WordPress website, balancing usability, brand alignment and ongoing maintenance.',tags:['WordPress','Divi','UI / UX','Content structure','Site upkeep'],live:'https://proudlyassociated.com/'}
};

const filterButtons=[...document.querySelectorAll('.filter-button')];

const projects=[...document.querySelectorAll('.project')];
filterButtons.forEach(button=>button.addEventListener('click',()=>{
 const filter=button.dataset.filter;
 filterButtons.forEach(b=>{const active=b===button;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
 projects.forEach(p=>{p.hidden=filter!=='all'&&p.dataset.type!==filter;});
}));

const dialog=document.getElementById('case-dialog');
const closeDialog=document.querySelector('.dialog-close');
let lastTrigger;
document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>{
 const item=caseStudies[button.dataset.open];if(!item)return;lastTrigger=button;
 document.getElementById('dialog-overline').textContent=item.label;
 document.getElementById('dialog-title').textContent=item.title;
 document.getElementById('dialog-intro').textContent=item.intro;
 document.getElementById('dialog-brief').textContent=item.brief;
 document.getElementById('dialog-technical').textContent=item.technical;
 document.getElementById('dialog-contributions').replaceChildren(...item.contributions.map(str=>{const li=document.createElement('li');li.textContent=str;return li;}));
 document.getElementById('dialog-tags').replaceChildren(...item.tags.map(str=>{const s=document.createElement('span');s.textContent=str;return s;}));
 document.getElementById('dialog-live').href=item.live;
 dialog.showModal();
}));

closeDialog.addEventListener('click',()=>dialog.close());

dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});

dialog.addEventListener('close',()=>{if(lastTrigger)lastTrigger.focus();});

const menuToggle=document.querySelector('.menu-toggle');
const nav=document.getElementById('primary-nav');

menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation');}));
document.getElementById('year').textContent=new Date().getFullYear();

let scheduled=false;
window.addEventListener('scroll',()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{const distance=document.documentElement.scrollHeight-window.innerHeight;document.querySelector('.reading-progress').style.width=distance>0?(100*window.scrollY/distance)+'%':'0%';scheduled=false;});},{passive:true});

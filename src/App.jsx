import { useState, useRef, useEffect } from "react";

const NAVY  = "#0D1B3E";
const TEAL  = "#1A9E8F";
const AMBER = "#F4A623";
const RUST  = "#C0392B";
const GREEN = "#1A6B3A";
const ROSE  = "#BE185D";
const GREY  = "#F0F4F8";
const WHITE = "#FFFFFF";
const MID   = "#64748B";

function TASSLogo({ size = "md", theme = "light" }) {
  const s = { sm:{the:9,main:18,sub:16,tag:9,rW:16,rH:1.5,gap:2}, md:{the:11,main:24,sub:22,tag:11,rW:22,rH:2,gap:3}, lg:{the:14,main:32,sub:29,tag:13,rW:28,rH:2,gap:4} }[size]||{the:11,main:24,sub:22,tag:11,rW:22,rH:2,gap:3};
  const navy=theme==="dark"?"#fff":NAVY, tag=theme==="dark"?"rgba(255,255,255,0.5)":"#6B7FA3", tagB=theme==="dark"?"rgba(255,255,255,0.75)":"#3D4F6B";
  return (
    <div style={{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:s.gap,userSelect:"none"}}>
      <div style={{display:"flex",alignItems:"center",gap:7}}>
        <div style={{width:s.rW,height:s.rH,background:TEAL,borderRadius:99}}/><span style={{color:TEAL,fontSize:s.the,fontWeight:800,letterSpacing:"0.25em",textTransform:"uppercase",lineHeight:1}}>THE</span><div style={{width:s.rW,height:s.rH,background:TEAL,borderRadius:99}}/>
      </div>
      <div style={{color:navy,fontSize:s.main,fontWeight:900,letterSpacing:"-0.01em",textTransform:"uppercase",lineHeight:1,marginTop:-1}}>APPRENTICESHIP</div>
      <div style={{color:TEAL,fontSize:s.sub,fontWeight:900,letterSpacing:"-0.01em",textTransform:"uppercase",lineHeight:1,marginTop:-3}}>SUCCESS SYSTEM™</div>
      <div style={{width:"70%",height:s.rH,background:TEAL,borderRadius:99}}/>
      <div style={{color:tag,fontSize:s.tag,letterSpacing:"0.16em",textTransform:"uppercase",fontWeight:400,marginTop:1}}>Stop Guessing.{" "}<strong style={{fontWeight:800,color:tagB}}>Start Securing.</strong></div>
    </div>
  );
}

const TABS = [
  {id:"home",      icon:"🏠", label:"Home"},
  {id:"sector",    icon:"🌟", label:"Sector"},
  {id:"pathways",  icon:"📋", label:"Pathways"},
  {id:"apply",     icon:"📝", label:"Apply"},
  {id:"mjs",       icon:"🏛️",  label:"MyJobScot"},
  {id:"cv",        icon:"📄", label:"CV"},
  {id:"star",      icon:"⭐", label:"STAR"},
  {id:"interview", icon:"🎤", label:"Interview"},
  {id:"safeguard", icon:"🛡️",  label:"Safeguard"},
  {id:"coaching",  icon:"📅", label:"Coaching"},
  {id:"coach",     icon:"🤖", label:"AI Coach"},
];

function PageHeader({icon,title,subtitle}){
  return (
    <div style={{marginBottom:22}}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
        <span style={{fontSize:22}}>{icon}</span>
        <h2 style={{color:NAVY,fontSize:20,fontWeight:900,margin:0,letterSpacing:"-0.02em"}}>{title}</h2>
      </div>
      <div style={{height:3,width:40,background:AMBER,borderRadius:2,marginBottom:8}}/>
      {subtitle&&<p style={{color:MID,fontSize:13,lineHeight:1.6,margin:0}}>{subtitle}</p>}
    </div>
  );
}

function Card({children,style={}}){
  return <div style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:12,padding:16,marginBottom:12,boxShadow:"0 1px 4px rgba(0,0,0,0.04)",...style}}>{children}</div>;
}

function InfoBox({text,type="tip"}){
  const s={tip:{bg:"#FFFBEB",border:AMBER,col:"#92400E"},info:{bg:"#EFF6FF",border:TEAL,col:"#1A5276"},success:{bg:"#F0FDF4",border:GREEN,col:"#14532D"},warning:{bg:"#FEF2F2",border:RUST,col:"#7F1D1D"},rose:{bg:"#FDF2F8",border:ROSE,col:"#831843"}}[type]||{bg:"#FFFBEB",border:AMBER,col:"#92400E"};
  return <div style={{background:s.bg,borderLeft:`4px solid ${s.border}`,borderRadius:8,padding:"10px 13px",marginBottom:14}}><p style={{color:s.col,fontSize:13,lineHeight:1.65,margin:0}}>{text}</p></div>;
}

function Accordion({items,accent=TEAL}){
  const [open,setOpen]=useState(null);
  return (
    <div>{items.map((item,i)=>(
      <div key={i} style={{background:WHITE,border:`1px solid ${open===i?accent:"#E2E8F0"}`,borderRadius:10,overflow:"hidden",marginBottom:8,boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
        <button onClick={()=>setOpen(open===i?null:i)} style={{width:"100%",background:"none",border:"none",padding:"13px 15px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",fontFamily:"inherit"}}>
          <span style={{color:NAVY,fontWeight:700,fontSize:14,textAlign:"left"}}>{item.title}</span>
          <span style={{color:accent,fontSize:18,flexShrink:0}}>{open===i?"−":"+"}</span>
        </button>
        {open===i&&<div style={{padding:"0 15px 15px",borderTop:"1px solid #F0F4F8"}}><div style={{paddingTop:12}}>{typeof item.content==="string"?<p style={{color:"#444",fontSize:13,lineHeight:1.75,margin:0,whiteSpace:"pre-line"}}>{item.content}</p>:item.content}</div></div>}
      </div>
    ))}</div>
  );
}

function ExampleToggle({weak,strong,weakLabel="✗ Weak",strongLabel="✓ Strong"}){
  const [show,setShow]=useState(null);
  return (
    <div>
      <div style={{display:"flex",gap:8,marginBottom:10}}>
        <button onClick={()=>setShow(show==="weak"?null:"weak")} style={{flex:1,padding:"9px 8px",background:show==="weak"?RUST:WHITE,border:`2px solid ${RUST}`,color:show==="weak"?WHITE:RUST,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{show==="weak"?"Hide":weakLabel}</button>
        <button onClick={()=>setShow(show==="strong"?null:"strong")} style={{flex:1,padding:"9px 8px",background:show==="strong"?GREEN:WHITE,border:`2px solid ${GREEN}`,color:show==="strong"?WHITE:GREEN,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{show==="strong"?"Hide":strongLabel}</button>
      </div>
      {show==="weak"&&<div style={{background:"#FEF2F2",borderLeft:`3px solid ${RUST}`,borderRadius:8,padding:"12px 14px",marginBottom:8}}><p style={{color:RUST,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 6px"}}>Weak — vague, no evidence</p><p style={{color:"#7F1D1D",fontSize:13,lineHeight:1.7,margin:0,fontStyle:"italic"}}>{weak}</p></div>}
      {show==="strong"&&<div style={{background:"#F0FDF4",borderLeft:`3px solid ${GREEN}`,borderRadius:8,padding:"12px 14px",marginBottom:8}}><p style={{color:GREEN,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 6px"}}>Strong — specific, evidenced</p><p style={{color:"#14532D",fontSize:13,lineHeight:1.75,margin:0,whiteSpace:"pre-line"}}>{strong}</p></div>}
    </div>
  );
}

function NavTabBar({options,active,onSelect}){
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>
      {options.map((opt,i)=>{
        const id=typeof opt==="object"?opt.id:opt, label=typeof opt==="object"?opt.label:opt, isActive=active===id;
        return <button key={i} onClick={()=>onSelect(id)} style={{background:isActive?NAVY:WHITE,color:isActive?WHITE:MID,border:`1px solid ${isActive?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:isActive?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase",letterSpacing:0.3,whiteSpace:"nowrap"}}>{label}</button>;
      })}
    </div>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function HomeModule({setTab}){
  const cards=[
    {id:"sector",    icon:"🌟",title:"Sector Reality",       desc:"What the job actually involves — day in the life, challenges, rewards and employer expectations"},
    {id:"pathways",  icon:"📋",title:"Career Pathways",      desc:"From apprentice to nursery manager, ASN specialist, teaching and beyond. Salary benchmarks included."},
    {id:"apply",     icon:"📝",title:"How to Apply",         desc:"Step-by-step application guide including SSSC, PVG, and what councils look for"},
    {id:"mjs",       icon:"🏛️", title:"MyJobScotland",       desc:"How to find, apply and write a winning supporting statement for council childcare roles"},
    {id:"cv",        icon:"📄",title:"CV Builder",           desc:"Three complete CV examples plus weak/strong comparisons for all key sections"},
    {id:"star",      icon:"⭐",title:"STAR Examples",        desc:"Four worked examples specific to early years — safeguarding, team scenarios, SEN and transitions"},
    {id:"interview", icon:"🎤",title:"Interview Prep",       desc:"Sector-specific questions, values-based interviewing and what to ask at the end"},
    {id:"safeguard", icon:"🛡️", title:"Safeguarding & PVG",  desc:"Scotland's PVG scheme, SSSC registration, disclosure and what you must know before interview"},
    {id:"coaching",  icon:"📅",title:"8-Session Programme",  desc:"A structured coaching plan for youth and parents — tasks, timings and outcomes for each session"},
    {id:"coach",     icon:"🤖",title:"AI Coach",             desc:"Personalised help — CV feedback, mock interviews, STAR answers and sector-specific guidance"},
  ];
  return (
    <div>
      <div style={{background:`linear-gradient(135deg, ${NAVY} 0%, #1A3060 100%)`,borderRadius:14,padding:"32px 20px 28px",display:"flex",justifyContent:"center",marginBottom:20}}>
        <TASSLogo size="lg" theme="dark"/>
      </div>
      <Card style={{borderLeft:`4px solid ${ROSE}`,background:"#FDF2F8"}}>
        <p style={{color:"#831843",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:0.5,margin:"0 0 4px"}}>Early Years and Childcare</p>
        <p style={{color:NAVY,fontSize:14,lineHeight:1.7,margin:0}}>Scotland's dedicated preparation module for Early Learning and Childcare Modern Apprenticeships. Covers the full journey from first application to interview — including Scotland-specific safeguarding, SSSC registration, PVG, MyJobScotland and sector-specific interview questions.</p>
      </Card>
      <Card style={{borderLeft:`4px solid ${TEAL}`,background:"#EFF6FF",marginBottom:20}}>
        <p style={{color:"#1A5276",fontWeight:700,fontSize:13,margin:"0 0 4px",textTransform:"uppercase",letterSpacing:0.5}}>Start here</p>
        <p style={{color:"#1A5276",fontSize:13,lineHeight:1.65,margin:0}}>Read <strong>Sector Reality</strong> first to understand what the job actually involves. Then <strong>Safeguarding and PVG</strong> — this is the section most candidates underestimate. Use the <strong>AI Coach</strong> at any stage for personalised feedback.</p>
      </Card>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:24}}>
        {cards.map((c,i)=>(
          <button key={i} onClick={()=>setTab(c.id)} style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:12,padding:"14px 12px",textAlign:"left",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}
            onMouseEnter={e=>e.currentTarget.style.borderColor=AMBER} onMouseLeave={e=>e.currentTarget.style.borderColor="#E2E8F0"}>
            <div style={{fontSize:20,marginBottom:6}}>{c.icon}</div>
            <p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"0 0 3px",lineHeight:1.3}}>{c.title}</p>
            <p style={{color:MID,fontSize:11,lineHeight:1.4,margin:0}}>{c.desc}</p>
          </button>
        ))}
      </div>
      <div style={{textAlign:"center",color:"#AAA",fontSize:11}}><strong style={{color:TEAL}}>The Apprenticeship Success System™</strong> · tass.scot</div>
    </div>
  );
}

// ─── SECTOR ───────────────────────────────────────────────────────────────────
function SectorModule(){
  const dayInLife=[
    {time:"7:00–8:00",activity:"Health and safety checks. Set up rooms and resources. Greet arriving children. Supervise breakfast — monitor allergies and dietary requirements."},
    {time:"9:00–11:00",activity:"Circle time — feelings check, plan the day's activities. Key-group learning: art, story, music and play based on each child's developmental needs."},
    {time:"11:30–13:30",activity:"Lunch — children self-serve under supervision to build independence. Prepare sleep mats. Monitor napping children every 10 minutes per H&S policy."},
    {time:"13:30–15:00",activity:"Children wake, nappies changed as needed, hydration encouraged. Child-led indoor and outdoor free play or group learning activities."},
    {time:"15:00–17:00",activity:"Afternoon snack — family-style eating encouraged. Parent handovers with feedback on the child's day. Cleaning, stocking and team debrief for next session."},
  ];
  return (
    <div>
      <PageHeader icon="🌟" title="Sector Reality" subtitle="What the job actually involves — the structured chaos, the deep rewards and what employers need from you from day one."/>
      <Card style={{borderLeft:`4px solid ${ROSE}`,background:"#FDF2F8"}}>
        <p style={{color:"#831843",fontWeight:800,fontSize:14,margin:"0 0 6px"}}>"Structured chaos — you are always busy, always thinking, but you end each day knowing you helped children enjoy and learn."</p>
        <p style={{color:"#831843",fontSize:12,margin:0}}>— Early Years Practitioner, Glasgow City Council</p>
      </Card>
      <Accordion accent={TEAL} items={[
        {title:"What an Early Years Practitioner actually does",content:"An Early Years Practitioner plans and delivers learning and play for children aged roughly 6 weeks to 5 years. Your daily work covers:\n\n• Teaching foundational skills through play — literacy, numeracy, social and emotional development through games, stories, music and movement\n• Physical care — feeding, nappy changing, toilet training, hygiene, sleep monitoring\n• Observing and recording each child's development against the Curriculum for Excellence Early Level\n• Planning and preparing activities based on each child's individual developmental needs\n• Communicating daily with parents and carers about each child's day, progress and any concerns\n• Working as part of a team alongside other practitioners, room leaders and the nursery manager\n• Maintaining accurate records — SSSC requirements, sleep logs, accident and incident reports, medication records\n\nThe role is physically demanding — expect to spend much of your day on the floor, lifting children and equipment, and moving between rooms and outdoor areas. It is also emotionally rewarding in a way that few careers match."},
        {title:"The Scotland-specific context — why now is a great time to enter this sector",content:"Scotland's childcare sector is in the middle of a significant expansion driven by government policy:\n\n• The Scottish Government's 1140 hours funded Early Learning and Childcare (ELC) entitlement — giving all 3 and 4-year-olds, and eligible 2-year-olds, 1140 hours of funded childcare per year — has created sustained demand for qualified practitioners across all 32 local authorities\n• This expansion created thousands of new practitioner posts in council nurseries between 2019 and 2024, and demand continues\n• Scotland has some of the strongest qualification requirements in the UK for childcare workers — which means qualified practitioners command better pay and have stronger job security than in many other parts of the UK\n• The Scottish Government's commitment to closing the poverty-related attainment gap keeps early years front and centre of education policy, meaning long-term investment in the sector is very likely\n\nFor anyone starting an ELC Modern Apprenticeship now, the job market is strong, the qualification is well-respected, and the progression routes are clear."},
        {title:"Working conditions — the honest picture",content:"Before applying, understand what the role involves day to day:\n\nPhysical demands:\n• Sitting on the floor for extended periods\n• Lifting children and equipment\n• Outdoor work in all Scottish weather\n• Fast-paced environment with no real downtime while children are present\n\nEmotional demands:\n• Managing distressed or upset children calmly\n• Handling difficult conversations with parents\n• Witnessing or responding to safeguarding concerns\n• Physical tiredness combined with emotional intensity\n\nWorking hours:\n• Most nurseries operate 7:30am–6:00pm; shifts are common\n• Full-time contracts are typically 35–40 hours per week\n• Part-time and term-time contracts exist, particularly in council settings\n\nNone of this is said to put you off — it is said to help you prepare realistic, credible interview answers. Candidates who demonstrate they understand the genuine demands of the role, and can speak to why they are suited to them, stand out immediately."},
        {title:"What employers look for — attitude first, everything else second",content:"The most consistent message from Scottish ELC employers is that attitude and character matter more than formal qualifications at the point of application.\n\nThey are looking for:\n\n1. Genuine motivation to work with young children — not just 'I like kids' but a specific understanding of why early years matters\n2. Reliability and punctuality — children and families depend on consistent, present practitioners. One unexplained absence affects the whole room\n3. Emotional maturity — the ability to stay calm, patient and professional when a child is distressed, a parent is difficult, or a colleague is under pressure\n4. Safeguarding awareness — any candidate who cannot speak to basic child protection awareness raises immediate concern\n5. Willingness to register with SSSC and complete PVG — mandatory for all practitioners in Scotland\n6. Communication skills — clear, warm, professional communication with children, parents, colleagues and managers\n\nFormal qualifications matter, but a candidate with National 5s and a clear understanding of the role, a well-evidenced CV and confident interview answers will routinely outperform a candidate with higher qualifications and a vague application."},
      ]}/>
      <p style={{color:NAVY,fontWeight:800,fontSize:13,margin:"16px 0 10px",textTransform:"uppercase",letterSpacing:0.5}}>Day in the life</p>
      {dayInLife.map((row,i)=>(
        <div key={i} style={{display:"flex",gap:12,marginBottom:8,alignItems:"flex-start"}}>
          <span style={{background:ROSE+"15",color:ROSE,fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:6,flexShrink:0,minWidth:90,textAlign:"center"}}>{row.time}</span>
          <p style={{color:"#444",fontSize:13,lineHeight:1.6,margin:0}}>{row.activity}</p>
        </div>
      ))}
    </div>
  );
}

// ─── PATHWAYS ─────────────────────────────────────────────────────────────────
function PathwaysModule(){
  const paths=[
    {id:"ma",icon:"⭐",role:"ELC Modern Apprenticeship",level:"SVQ Level 6",timeframe:"Age 16+ · 2 years",salary:"£18,000–£22,000",
     entry:"No formal academic requirements. A genuine passion for working with young children is essential. You must be willing to register with the SSSC as a Student Practitioner and complete a PVG Disclosure Scotland check before starting.",
     desc:"The starting point for most ELC careers in Scotland. You are employed from day one by a nursery, council or private provider. One day per week at college for your HNC Early Education and Childcare. The rest of the week you are working directly with children aged 0–5 in a real setting.",
     employers:"All 32 Scottish councils, NHS nurseries, private providers (Bright Horizons, Cala Mara, Smiley Faces), third sector organisations (Barnardo's, Action for Children)",
     day:["7:30 — Arrive early. Check the room is set up safely. Review any notes from the previous session about individual children.","8:00 — Welcome children and families. Greet by name, note any handover information from parents.","9:00 — Child-led play session. Observe and support — document observations for your learning journals.","11:00 — Snack time. Support children to self-serve, build independence, practise social skills.","12:00 — Lunch and outdoor play. Supervise, engage, support gross motor development.","14:00 — Rest/quiet time for younger children. Planning time or one-to-one key worker activities.","15:30 — Afternoon session. Creative activities, story time, preparing for home.","16:00 — Handover to parents. Share observations, any concerns, positive moments."],
     routes:"Once qualified at SVQ Level 6, you can progress to Senior Practitioner, Room Leader or apply for a Graduate Apprenticeship in Childhood Practice (SCQF Level 9) without leaving employment."},
    {id:"senior",icon:"👩‍🏫",role:"Senior Practitioner / Room Leader",level:"SVQ Level 7 / HNC",timeframe:"Typically age 20–28",salary:"£23,000–£30,000",
     entry:"Requires SVQ Level 6 or HNC Early Education and Childcare. SSSC registration as Practitioner. Experience in a key worker role. Some employers also require a First Aid certificate.",
     desc:"Senior practitioners take on additional responsibilities — leading a room team, mentoring junior staff and apprentices, completing more complex developmental observations and liaising with external agencies. This is where your practice deepens significantly.",
     employers:"All 32 Scottish councils, NHS nurseries, private nursery chains, third sector organisations",
     day:["8:00 — Room leader briefing. Brief your team on the day, any children with specific needs, student/apprentice supervision responsibilities.","9:00 — Lead morning session. Model best practice for apprentices observing you.","10:30 — Planning and documentation. Complete SHANARRI-based observations for your key children.","12:00 — Lunchtime leadership. Manage the room team, ensure routines are consistent.","14:00 — Key worker meeting or parent consultation. Discuss individual child progress.","15:00 — Staff supervision of apprentice — give structured feedback on their practice.","16:00 — Room audit, safety check, handover notes for the next session."],
     routes:"From Senior Practitioner you can move into Deputy Manager or Nursery Manager roles, or progress to a Graduate Apprenticeship in Childhood Practice (SCQF Level 9) or a BA Childhood Practice via distance learning."},
    {id:"manager",icon:"🏫",role:"Nursery Manager / Deputy",level:"SCQF Level 9–11",timeframe:"Typically age 28+",salary:"£30,000–£45,000",
     entry:"Typically requires HNC plus SVQ Level 7, or a BA/Graduate Apprenticeship in Childhood Practice. SSSC registration as a Manager. Significant experience in a senior practitioner or deputy role. Some councils require a leadership qualification.",
     desc:"Nursery managers hold full responsibility for the setting — staff management, Care Inspectorate inspections, budget, parent relationships, safeguarding leadership and strategic planning. Council nursery manager roles are on SJC pay scale band 7–8 and include excellent pension and leave.",
     employers:"All 32 Scottish councils (most competitive and best paid), NHS nurseries, private nursery chains (area manager progression), third sector organisations",
     day:["8:00 — Senior leadership walk-round. Check all rooms are staffed, safe and ready.","9:00 — Staff supervision or recruitment activity.","10:00 — Parent meeting or multi-agency meeting (with social work, speech therapy, health visitor).","11:00 — Care Inspectorate preparation, quality improvement planning or staff training coordination.","13:00 — Budget review, procurement, staffing rota management.","14:00 — SSSC registration renewals, training records, safeguarding updates for the team.","16:00 — End of day review with deputy. Prepare for the following day."],
     routes:"Experienced nursery managers can move into area manager roles (private sector), ELC development officer or quality improvement officer roles (councils and Scottish Government), or policy and sector development work."},
    {id:"asn",icon:"💙",role:"ASN / Additional Support Needs Practitioner",level:"Additional certification",timeframe:"Post-SVQ Level 6",salary:"£25,000–£38,000",
     entry:"SVQ Level 6 is the foundation. Additional training in autism (ADOS, PDA), dyslexia, physical disabilities, or Makaton/BSL is required depending on the role. Some posts require a specific ASN qualification or experience working with a named condition.",
     desc:"ASN practitioners work specifically with children who have additional support needs — autism spectrum conditions, physical disabilities, developmental delays, sensory impairment, speech and language difficulties. This is one of the most skilled and most rewarding roles in early years. Strong demand across all 32 Scottish councils.",
     employers:"All 32 Scottish councils (mainstream and specialist settings), NHS Children's Services, specialist providers (Enable Scotland, Sense Scotland, National Autistic Society Scotland)",
     day:["8:30 — Review individual support plans for each child on your caseload.","9:00 — One-to-one or small group work with ASN children — play-based therapeutic approaches.","10:30 — Collaborative planning with class teacher, SENCO or early years coordinator.","12:00 — Mealtime support — eating and drinking skills, sensory sensitivities, communication support.","13:00 — Documentation — update EHCP or additional support plans, record observations.","14:30 — Parent update or multi-agency meeting with health visitor, speech therapist, OT.","15:30 — Resource preparation for tomorrow's individual programme."],
     routes:"ASN practitioners can progress to Lead ASN Practitioner, SENCO, Early Intervention Officer or with further study into Educational Psychology or Speech and Language Therapy."},
    {id:"nanny",icon:"🏠",role:"Nanny / Private Childcarer",level:"Practitioner qualification",timeframe:"Post-qualification",salary:"£28,000–£55,000+",
     entry:"SVQ Level 6 or HNC Early Education and Childcare is typically expected. Enhanced Disclosure Scotland (PVG) essential. First Aid certificate required by most families. Paediatric first aid preferred. Nanny insurance advisable.",
     desc:"Working as a private nanny in Scotland or the UK offers excellent salaries, a high degree of autonomy and often unique experiences including travel. Top nanny roles in London can exceed £55,000. Scotland-based nannies typically earn £28,000–£40,000. SEN-qualified nannies and bilingual nannies command a significant premium.",
     employers:"Private families via agencies (Koru Kids, Tinies, Nannies of Edinburgh), direct hire, au pair agencies for international travel roles",
     day:["Varies entirely by family — each nanny role is unique","Typically: school or nursery run, activity planning, meal preparation, homework support","May include: travel with family, sole charge of multiple children, managing household routines","Contracts vary: live-in (accommodation and meals included) or live-out","Key skills: independence, initiative, excellent communication with parents, professional boundaries"],
     routes:"Experienced nannies can move into nanny management (agency side), childcare consultancy, parenting support, or return to the sector as a practitioner with significantly enhanced experience and salary negotiating power."},
  ];
  const [active,setActive]=useState("ma");
  const p=paths.find(x=>x.id===active)||paths[0];
  return (
    <div>
      <PageHeader icon="📋" title="Career Pathways" subtitle="Where an ELC Modern Apprenticeship can take you — from day one to senior leadership and beyond."/>
      <InfoBox text="Scotland's 1140 hours ELC expansion has created sustained demand for qualified practitioners across all 32 councils. Job security in this sector is strong and improving." type="success"/>
      <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>
        {paths.map(pw=>(
          <button key={pw.id} onClick={()=>setActive(pw.id)} style={{background:active===pw.id?NAVY:WHITE,color:active===pw.id?WHITE:MID,border:`1px solid ${active===pw.id?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 10px",fontSize:10,fontWeight:active===pw.id?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>
            {pw.icon} {pw.role.split(" ")[0]}
          </button>
        ))}
      </div>
      <Card>
        <p style={{color:ROSE,fontWeight:800,fontSize:15,margin:"0 0 4px"}}>{p.icon} {p.role}</p>
        <p style={{color:MID,fontSize:12,margin:"0 0 12px"}}>{p.level} · {p.timeframe} · {p.salary}</p>
        <p style={{color:"#444",fontSize:13,lineHeight:1.65,margin:"0 0 14px"}}>{p.desc}</p>
        {[["Entry requirements",p.entry],["Key employers",p.employers]].map(([label,val],i)=>(
          <div key={i} style={{display:"flex",gap:12,padding:"9px 0",borderBottom:"1px solid #F0F4F8"}}>
            <span style={{color:MID,fontSize:11,fontWeight:700,textTransform:"uppercase",minWidth:110,flexShrink:0}}>{label}</span>
            <span style={{color:NAVY,fontSize:13,lineHeight:1.5}}>{val}</span>
          </div>
        ))}
        <p style={{color:TEAL,fontSize:11,fontWeight:700,textTransform:"uppercase",margin:"12px 0 8px"}}>Day in the life</p>
        {p.day.map((item,i)=>(
          <div key={i} style={{display:"flex",gap:10,marginBottom:7,alignItems:"flex-start"}}>
            <div style={{width:5,height:5,background:ROSE,borderRadius:99,flexShrink:0,marginTop:5}}/>
            <p style={{color:"#444",fontSize:13,lineHeight:1.55,margin:0}}>{item}</p>
          </div>
        ))}
        <div style={{background:"#EFF6FF",borderLeft:`3px solid ${TEAL}`,borderRadius:8,padding:"9px 12px",marginTop:12}}>
          <p style={{color:TEAL,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 3px"}}>Progression route</p>
          <p style={{color:"#1A5276",fontSize:13,lineHeight:1.6,margin:0}}>{p.routes}</p>
        </div>
      </Card>
    </div>
  );
}


// ─── APPLY ────────────────────────────────────────────────────────────────────
function ApplyModule(){
  const [step,setStep]=useState(0);
  const steps=[
    {title:"Research and target",icon:"🔍",content:"Start with Apprenticeships.scot and MyJobScotland — these are the two portals where the vast majority of Scottish ELC apprenticeship vacancies are advertised.\n\nFilter Apprenticeships.scot by:\n• Framework: Early Learning and Childcare\n• Level: Modern Apprenticeship\n• Location: your council area or commutable distance\n\nSet up email alerts on both portals so you are notified immediately when new roles are posted. ELC roles in council settings are competitive — some close within a week of posting.\n\nAlso check directly:\n• Your local council's own recruitment pages (e.g. Glasgow City Council, City of Edinburgh, North Lanarkshire)\n• Private nursery chains: Bright Horizons, Busy Bees, Kindred2, Stramash (outdoor nurseries)\n• Scottish charity nurseries: Barnardo's, Action for Children, Aberlour",tip:"The peak recruitment window for council nurseries is January–April for August starts. Private nurseries recruit year-round. Set your alerts to immediate notification — not weekly digest."},
    {title:"SSSC and PVG — do this first",icon:"🛡️",content:"Before you can work in any childcare setting in Scotland, two things are mandatory:\n\n1. PVG Scheme membership (Protecting Vulnerable Groups)\nThe PVG scheme is Scotland's enhanced disclosure system for people working with children or protected adults. It is managed by Disclosure Scotland. You cannot work in an ELC setting without it.\n\nYou do not need to complete PVG before applying — your employer will initiate it as part of your offer. However, you should be ready to discuss it at interview and understand what it involves.\n\nKey facts:\n• The PVG check looks at spent and unspent convictions relevant to working with children\n• Having a conviction does not automatically disqualify you — the nature and relevance of the conviction is assessed\n• Your employer pays for the PVG check\n\n2. SSSC Registration (Scottish Social Services Council)\nAll childcare workers in Scotland must register with the SSSC. As an apprentice, you register as a Student Practitioner. On qualification, you move to Practitioner level registration.\n\nSSCS registration requires:\n• A relevant qualification (your SVQ)\n• References from your employer\n• A signed values statement\n• Ongoing CPD (Continuing Professional Development) to maintain registration\n\nNot being registered — or not being committed to registering — will end your application at most employers.",tip:"At interview, when safeguarding or professional standards come up, mention SSSC registration and PVG proactively. It signals you have done your research and take professional standards seriously."},
    {title:"The application form",icon:"📝",content:"Most ELC apprenticeship applications in Scotland are submitted through MyJobScotland (for council roles) or directly through Apprenticeships.scot or an employer's own system.\n\nFor council applications, you will typically complete:\n• Personal details\n• Education and qualifications\n• Employment history\n• A supporting statement (the most important section — see the MyJobScotland tab for full guidance)\n• Declaration of any convictions\n• Diversity monitoring information\n\nThe supporting statement is where you win or lose the application. It is not a repeat of your CV — it is a structured argument for why you are the right person for this specific role, using specific evidence tied to the person specification.\n\nFor private nursery applications, you will usually submit a CV with a covering letter. The covering letter functions like the supporting statement — it must be tailored, specific and evidenced.",tip:"Never copy and paste the same supporting statement to multiple employers. The person specification differs between councils and between roles — your statement must address the specific criteria in the specific advert you are responding to."},
    {title:"After you apply",icon:"📮",content:"Once your application is submitted:\n\n• Note the closing date and expected decision date in your calendar\n• Keep applying to other roles — do not wait for one outcome before continuing\n• If the closing date passes without contact, one polite follow-up email or phone call is appropriate\n\nIf you are invited to interview:\n• Confirm attendance immediately and professionally\n• Ask about the format — panel interview, observation of children, written task, or a combination\n• Many ELC interviews include a practical element — you may be asked to interact with children or plan a short activity. Prepare for this.\n• Read the nursery's latest inspection report (Care Inspectorate Scotland) — knowing their grading and any areas for improvement shows genuine research\n\nIf you are rejected:\n• Request feedback if it is offered — and if it is not offered, politely ask for it\n• Use it to improve the next application\n• Rejection in a competitive sector is normal. Most people who eventually secure an ELC apprenticeship apply more than once.",tip:"The Care Inspectorate publishes inspection reports for every nursery in Scotland at careinspectorate.com. Reading the report for the nursery you are interviewing at — and mentioning it at interview — is one of the most powerful signals you can send."},
  ];
  const s=steps[step];
  return (
    <div>
      <PageHeader icon="📝" title="How to Apply" subtitle="Step-by-step — from first search to submitted application, including what Scotland requires that England does not."/>
      <div style={{display:"flex",gap:6,marginBottom:14,overflowX:"auto",paddingBottom:4}}>
        {steps.map((st,i)=>(
          <button key={i} onClick={()=>setStep(i)} style={{background:step===i?NAVY:WHITE,color:step===i?WHITE:MID,border:`1px solid ${step===i?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:step===i?800:400,cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap",textTransform:"uppercase"}}>{i+1}. {st.icon}</button>
        ))}
      </div>
      <Card>
        <p style={{color:AMBER,fontWeight:800,fontSize:14,margin:"0 0 4px",textTransform:"uppercase"}}>{s.icon} {s.title}</p>
        <div style={{height:2,width:28,background:AMBER,borderRadius:2,marginBottom:12}}/>
        <p style={{color:"#444",fontSize:14,lineHeight:1.75,margin:"0 0 12px",whiteSpace:"pre-line"}}>{s.content}</p>
        <div style={{background:"#F0FDF4",border:`1px solid ${GREEN}30`,borderLeft:`3px solid ${GREEN}`,borderRadius:8,padding:"9px 12px"}}>
          <p style={{color:"#14532D",fontSize:13,lineHeight:1.6,margin:0}}>💡 {s.tip}</p>
        </div>
      </Card>
      <div style={{display:"flex",gap:10}}>
        {step>0&&<button onClick={()=>setStep(s=>s-1)} style={{flex:1,padding:12,background:WHITE,border:"1px solid #E2E8F0",color:NAVY,borderRadius:8,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>← Previous</button>}
        {step<steps.length-1&&<button onClick={()=>setStep(s=>s+1)} style={{flex:1,padding:12,background:AMBER,border:"none",color:NAVY,borderRadius:8,fontWeight:800,cursor:"pointer",fontFamily:"inherit"}}>Next →</button>}
      </div>
    </div>
  );
}

// ─── MYJOBSCOTLAND ────────────────────────────────────────────────────────────
function MJSModule(){
  const [section,setSection]=useState("profile");
  const sections={
    profile:{label:"Profile setup",content:"Your MyJobScotland profile is your application foundation for every council job in Scotland. Complete every section before you apply to anything.\n\nKey sections:\n• Personal details — use a professional email address\n• Employment history — include all paid and voluntary experience\n• Education — include all qualifications with grades\n• Skills — list skills that appear in ELC job descriptions: child development, safeguarding awareness, communication, teamwork, observation, record keeping\n• Personal statement — this is NOT your CV personal profile. It is a brief paragraph about your career goals. Keep it focused on early years.\n\nA complete, professional profile is screened before a human reads your application. An incomplete profile may be rejected automatically by the ATS system before any human sees it.",tip:"Set your job alerts on MyJobScotland for: 'Early Learning', 'Childcare', 'Nursery', 'ELC'. Set notification to immediate — not weekly. Some council roles close within 3–4 days of posting."},
    search:{label:"Finding ELC roles",content:"Searching for ELC apprenticeship roles on MyJobScotland:\n\n1. Use the keyword search: try 'Early Learning', 'Modern Apprenticeship Childcare', 'Nursery Assistant', 'Child Development Officer'\n2. Filter by: Job Type → Apprenticeship\n3. Filter by: Council area → your local authority\n4. Sort by: Date posted (most recent first)\n\nRole titles vary significantly between councils:\n• Glasgow City Council: 'Modern Apprentice — Early Learning and Childcare'\n• City of Edinburgh: 'Early Years Apprentice'\n• North Lanarkshire: 'Child Development Officer (Trainee)'\n• South Lanarkshire: 'Early Years Support Worker (Apprentice)'\n\nSearch multiple terms — the same type of role may appear under different titles depending on the council.",tip:"Save interesting job adverts immediately — they sometimes disappear before the closing date if the role is filled early. Screenshot or copy the full person specification before applying."},
    statement:{label:"Supporting statement",content:"The supporting statement is the single most important element of a council childcare application. It is scored against the person specification — every criterion listed in the advert is a potential scored item.\n\nHow to write it:\n\n1. Print the person specification and highlight every criterion listed as Essential\n2. For each Essential criterion, write one paragraph of evidence using the STAR method: Situation, Task, Action, Result\n3. Address the criteria in the order they appear in the person specification\n4. Use language from the person specification — if it says 'ability to build positive relationships with children', use those exact words\n5. Keep each paragraph focused: one criterion, one specific example, one clear outcome\n\nLength: typically 500–800 words. Never more than one side of A4 when printed.\n\nCommon mistakes:\n• Writing about what you want to do rather than what you have done\n• Using 'we' instead of 'I'\n• Generic paragraphs that could apply to any job\n• Addressing only some of the essential criteria",tip:"Treat the supporting statement as a scored exam — because that is exactly what it is. Every Essential criterion is a mark. Address them all."},
    edi:{label:"EDI questions",content:"Many council ELC applications include Equality, Diversity and Inclusion questions. These are increasingly common and are sometimes scored.\n\nTypical questions:\n• 'Describe how you would ensure all children feel included and valued in your setting.'\n• 'How would you support a child or family from a different cultural background?'\n• 'What does equality mean to you in an early years context?'\n\nHow to answer:\n\nFocus on behaviour and actions, not attitudes. Don't say 'I treat everyone the same' — that is not an inclusive approach. Instead:\n\n'I would take time to understand each child's individual background, culture and needs. For example, when planning activities I would ensure they reflect the diversity of the children in the room — using books with diverse characters, celebrating different cultural events, and asking families to share their traditions. I would adapt communication to each family's preferences and use visual supports for children whose home language is not English.'\n\nIn an ELC context specifically:\n• Children with ASN (Additional Support Needs) — mention individual support plans, working with SENCO\n• Looked-after children — mention trauma-informed approaches and working with social workers\n• EAL families — mention visual communication, translated materials, community interpreters",tip:"Scotland's Getting it Right for Every Child (GIRFEC) framework is the context for all EDI work in Scottish childcare. Mention GIRFEC if you can — it signals genuine sector knowledge."},
  };
  const s=sections[section];
  return (
    <div>
      <PageHeader icon="🏛️" title="MyJobScotland Guide" subtitle="How to find, apply and write a winning supporting statement for council ELC apprenticeship roles."/>
      <InfoBox text="All 32 Scottish councils advertise childcare vacancies through MyJobScotland. It is the primary portal for council ELC apprenticeships — mastering it is essential." type="info"/>
      <NavTabBar options={Object.entries(sections).map(([k,v])=>({id:k,label:v.label.split(" ")[0]}))} active={section} onSelect={setSection}/>
      <Card>
        <p style={{color:TEAL,fontWeight:700,fontSize:13,margin:"0 0 10px",textTransform:"uppercase",letterSpacing:0.5}}>{s.label}</p>
        <p style={{color:"#444",fontSize:13,lineHeight:1.75,margin:"0 0 14px",whiteSpace:"pre-line"}}>{s.content}</p>
        <div style={{background:"#FFFBEB",borderLeft:`3px solid ${AMBER}`,borderRadius:8,padding:"9px 12px"}}>
          <p style={{color:"#92400E",fontSize:13,lineHeight:1.6,margin:0}}>💡 {s.tip}</p>
        </div>
      </Card>
      <p style={{color:NAVY,fontWeight:800,fontSize:12,textTransform:"uppercase",letterSpacing:0.5,margin:"16px 0 10px"}}>Supporting statement — weak vs strong</p>
      <ExampleToggle
        weak="I want to work in childcare because I love children and have always wanted to help them. I am patient and caring and I think I would be good at this job. I have looked after my younger siblings and enjoy spending time with children. I believe I have the right qualities to be a good practitioner."
        strong="I am applying for this role because I have a genuine passion for early child development rooted in two years of voluntary experience at Riverside After-School Club, where I supported 20 children aged 3–5 with structured play and learning activities. In response to the person specification criterion 'ability to support children's social and emotional development', I draw on my experience of introducing a daily feelings check-in circle at the club — an initiative I proposed and led — which the lead practitioner noted had a visible positive impact on group cohesion within four weeks. I understand the demands of the role: I am aware of Scotland's SSSC registration requirements and am committed to completing PVG disclosure as part of the onboarding process. I am also familiar with the Getting it Right for Every Child framework and understand how it shapes practice in this setting. I am reliable, physically resilient and motivated to develop into a qualified practitioner over the course of this apprenticeship."
        weakLabel="Weak statement"
        strongLabel="Strong statement"
      />
    </div>
  );
}

// ─── CV ───────────────────────────────────────────────────────────────────────
function CVModule(){
  const [cohort,setCohort]=useState("school");
  const [reveal,setReveal]=useState(null);
  const cvs={
    school:{
      label:"School Leaver (16–18)",
      profile:{
        weak:"I am 17 and I love working with children. I have looked after my younger siblings and I am patient and caring. I am a hard worker and a fast learner and I would love to do this apprenticeship.",
        strong:"Motivated 17-year-old with hands-on childcare experience gained through two years of volunteering at Westfield After-School Club, where I assisted with structured play and learning activities for 15 children aged 3–6. Achieved National 5 English (B) and Health and Food Technology (A). Demonstrate consistent patience and communication through weekly babysitting for three families over 18 months. Committed to early years as a career — currently completing a PDA in Early Education and Childcare at college alongside S6. Seeking a Modern Apprenticeship where I can develop into a qualified practitioner while contributing to a high-quality setting from day one."
      },
      experience:{
        weak:"I helped at an after-school club and looked after children. I babysat for neighbours. I did some volunteering.",
        strong:"Volunteer Assistant, Westfield After-School Club — Glasgow (Sept 2022–present)\n• Supported 15 children aged 3–6 with structured play, arts and crafts and story activities across 3 weekly sessions\n• Proposed and led a daily feelings check-in circle — adopted permanently by the lead practitioner\n• Monitored children's safety during outdoor play, reporting hazards to the supervising practitioner\n• Communicated daily with parents at pick-up, relaying key information about their child's session\n\nBabysitter — 3 local families (Jan 2022–present)\n• Provided regular evening and weekend childcare for children aged 18 months–7 years\n• Managed bedtime routines, meal preparation and age-appropriate activities independently\n• Trusted with sole care of children by 3 families over 18 months without any incident"
      }
    },
    graduate:{
      label:"Graduate / College Leaver (18–24)",
      profile:{
        weak:"I have just finished my HNC in Childhood Practice and I am looking for an apprenticeship in childcare. I have a qualification and some experience and I am ready to start work.",
        strong:"HNC Childhood Practice graduate with a distinction average, seeking an Early Learning and Childcare Modern Apprenticeship to develop practical competence alongside a strong academic foundation. Completed a 12-week placement at Kelvinbridge Nursery, delivering planned activities for children aged 2–4, maintaining developmental observation records and supporting key worker relationships for a group of 8 children. Academic study included the UNCRC, GIRFEC, Curriculum for Excellence Early Level, play theory and inclusive practice. Currently completing PVG application. SSSC student registration in progress. Looking to contribute research-informed practice to a setting that values continuing professional development."
      },
      experience:{
        weak:"I did a placement at a nursery as part of my course. I helped with activities and got on well with the children and staff.",
        strong:"Practice Placement, Kelvinbridge Nursery — Glasgow (Jan–Apr 2025)\n• Delivered planned learning activities for a key group of 8 children aged 2–4, using observation notes to adapt activities to individual developmental stages\n• Maintained daily developmental records in line with the nursery's documentation system\n• Supported children during transitions — arrivals, mealtimes, sleep and parent handovers\n• Attended weekly team planning meetings; contributed activity ideas adopted by room leader on two occasions\n• Commended in final placement report for communication with parents and calm management of a distressed child during a separation anxiety episode"
      }
    },
    changer:{
      label:"Career Changer (25–29)",
      profile:{
        weak:"I have been working in retail for 7 years but I want to change career to work with children. I think I would be good at it because I am good with people. I am willing to learn.",
        strong:"Experienced retail supervisor with 7 years of team leadership and customer service, now making a deliberate and well-prepared transition into Early Learning and Childcare. Completed an introductory PDA in Early Education alongside work (2024) and spent 6 weekends volunteering at Sunshine Playgroup to build direct childcare experience. Bring proven people management, communication under pressure and behaviour support skills directly relevant to a practitioner role. Committed to SSSC registration and full PVG disclosure. Motivated by a long-standing interest in child development and a genuine belief that early years is where the most important work happens — and where I can build a more meaningful long-term career."
      },
      experience:{
        weak:"I worked in retail for 7 years as a supervisor. I managed staff and dealt with customers. I also did some volunteering with children recently.",
        strong:"Team Supervisor, Morrison's — Dundee (Mar 2018–present)\n• Supervised a team of 9 across three departments — scheduling, briefings, performance monitoring and escalation\n• Managed conflict and difficult customer interactions calmly and professionally on a daily basis\n• Trained and inducted 14 new colleagues across 5 years, adapting communication to each individual's learning style — directly transferable to working with children at different developmental stages\n• Responsible for safeguarding compliance in food preparation areas — maintained safety records and incident logs\n\nVolunteer Assistant, Sunshine Playgroup — Dundee (Jan–Apr 2025)\n• Assisted with play sessions for 12 children aged 2–4 across 6 weekend sessions\n• Supported setup, activity delivery and end-of-session tidying under the supervision of qualified practitioners\n• Practised calm floor-level engagement with children during free play — received positive feedback from the lead practitioner"
      }
    }
  };
  const c=cvs[cohort];
  return (
    <div>
      <PageHeader icon="📄" title="CV Builder" subtitle="Three complete cohort profiles — profile and experience examples for each, weak and strong versions throughout."/>
      <InfoBox text="The CV is a marketing document. Its only job is to win you an interview. Evidence every skill — never just claim it." type="tip"/>
      <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}}>
        {Object.entries(cvs).map(([k,v])=>(
          <button key={k} onClick={()=>{setCohort(k);setReveal(null);}} style={{background:cohort===k?NAVY:WHITE,color:cohort===k?WHITE:MID,border:`1px solid ${cohort===k?NAVY:"#E2E8F0"}`,borderRadius:10,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",flex:1,fontWeight:700,fontSize:12}}>
            {v.label.split(" ")[0]} {v.label.split(" ")[1]}
          </button>
        ))}
      </div>
      <p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"0 0 10px",textTransform:"uppercase",letterSpacing:0.5}}>Personal Profile — {c.label}</p>
      <ExampleToggle weak={c.profile.weak} strong={c.profile.strong} weakLabel="Weak profile" strongLabel="Strong profile"/>
      <p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"16px 0 10px",textTransform:"uppercase",letterSpacing:0.5}}>Work Experience — {c.label}</p>
      <ExampleToggle weak={c.experience.weak} strong={c.experience.strong} weakLabel="Weak experience" strongLabel="Strong experience"/>
      <Card style={{marginTop:8}}>
        <p style={{color:TEAL,fontWeight:700,fontSize:12,margin:"0 0 10px",textTransform:"uppercase"}}>ELC-specific CV checklist</p>
        {["Profile mentions the specific sector — early years/childcare — not just 'working with people'","SSSC registration commitment mentioned","PVG willingness mentioned","Any relevant qualifications (HNC, PDA, First Aid) listed","Informal experience (babysitting, volunteering) included and framed professionally","Every experience bullet starts with a strong action verb","At least one bullet includes a specific number (children supervised, sessions per week, months of experience)","Safeguarding awareness mentioned — explicitly or implicitly","'I' used throughout — not 'we'"].map((item,i)=>(
          <div key={i} style={{display:"flex",gap:10,marginBottom:7,alignItems:"flex-start"}}>
            <div style={{width:18,height:18,border:`2px solid ${TEAL}`,borderRadius:4,flexShrink:0,marginTop:1}}/>
            <p style={{color:"#444",fontSize:13,lineHeight:1.5,margin:0}}>{item}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}

// ─── STAR ─────────────────────────────────────────────────────────────────────
const STAR_EXAMPLES=[
  {label:"Safeguarding",question:"Tell me about a time you showed awareness of a child's safety or welfare.",
   weak:"Once I noticed a child seemed upset so I tried to make them feel better. I told my supervisor about it.",
   good:"During my placement, I noticed a child had unexplained bruising on their arm. I was worried but unsure what to do. I told the room leader straight away and she logged it as a welfare concern.",
   strong:"During my placement at Kelvinbridge Nursery, I noticed a 3-year-old had a bruise on her upper arm that had not been there the previous session and had not been reported by her parent at drop-off. I was aware from my HNC training that unexplained marks in non-mobile areas can be a welfare concern. Without drawing attention to the child or alarming the parent, I quietly informed the room leader during a natural break in the session. She took my concern seriously, logged it in the welfare records and contacted the SSSC-designated safeguarding lead. The child's keyworker then had a scheduled conversation with the family at pick-up. I learned that flagging a concern quietly, promptly and without panic is the right approach — and that my role is to report, not to investigate.",
   why:"This answer demonstrates safeguarding knowledge (the significance of unexplained marks in non-mobile areas), correct procedure (report to the designated lead, not to the parent directly), and professional composure. These are exactly the qualities an ELC employer needs to see."},
  {label:"Child transition",question:"Describe a time you helped a child through a difficult transition.",
   weak:"Some children find it hard to settle. I would try to comfort them and get them to play with something they liked.",
   good:"A child in my placement group had significant separation anxiety at drop-off every morning. I made sure to greet her at the door each day and stayed close to her during the settling-in period, which helped reduce her distress over two weeks.",
   strong:"During my placement, a 2-year-old boy joined the room mid-term after an emergency placement change. He arrived with significant anxiety — refusing food, clinging to staff and crying for extended periods. I was not his keyworker but I worked alongside her to provide consistent, calm engagement during his first two weeks. I researched attachment theory in my HNC materials and suggested we trial a comfort object system — his keyworker agreed and we asked his carer to send in a familiar item from home. Within ten days his meal participation had improved and he began initiating play with two children in the room. His keyworker mentioned my contribution in my placement feedback. The experience reinforced to me that transitions require a whole-team response, not just the keyworker's individual effort.",
   why:"This demonstrates knowledge of attachment, teamwork, initiative and measurable outcome — all in a genuinely childcare-specific context. It also shows the candidate uses their learning actively, not passively."},
  {label:"Additional Support Needs",question:"Tell me about a time you supported a child with additional needs.",
   weak:"I worked with a child who had some difficulties. I tried to be patient with them and help them when they needed it.",
   good:"At the after-school club I helped a child with autism who found busy, noisy times difficult. I learned which activities he enjoyed and made sure he had access to a quieter corner when he needed it.",
   strong:"At Westfield After-School Club, I supported a 5-year-old with autism who became very distressed during transitions between activities. The club had no formal SEN support plan — I was a volunteer, but I asked the lead practitioner what had been tried before and whether I could observe what typically triggered distress. I noticed the issue was the absence of warning before transitions. I began giving him a two-minute verbal and visual countdown before every change — something I had read about in a child development article online. The lead practitioner adopted this approach for the whole group and noted it also reduced disruption from three other children who found abrupt transitions difficult. I am aware I was not working in a formal SEN capacity, but the experience showed me that evidence-informed small adjustments can make a significant difference — and that I want to develop proper ASN expertise as part of my career.",
   why:"This answer shows proactive learning, evidence-based thinking, cross-group benefit and genuine ambition in the ASN area — all qualities that distinguish a serious candidate from someone who simply likes working with children."},
  {label:"Teamwork under pressure",question:"Describe a time you worked effectively as part of a team in a difficult situation.",
   weak:"I worked in a team at my job. We all did our bit and helped each other when it was busy.",
   good:"During a busy afternoon session at the club, our lead practitioner had to step away unexpectedly. The two remaining staff, including me, managed the group together and kept everything calm until she returned.",
   strong:"During a shift at Westfield After-School Club, the lead practitioner received an urgent call and had to step away from the room for 20 minutes. The remaining team was myself — a volunteer — and one part-time paid member of staff. We had 18 children present, three of whom had behaviours that could escalate quickly. I immediately moved to the area of the room where the three higher-need children were, and the paid member of staff managed the wider group. We communicated in short, calm signals across the room. When one child became agitated, I used a sensory distraction we had discussed previously in the team — it worked within two minutes. When the lead returned she debriefed us, thanked us and noted in my placement records that I had shown strong situational awareness. The experience taught me that effective teamwork under pressure requires reading the room, communicating clearly with colleagues and acting on shared knowledge rather than waiting for direction.",
   why:"This demonstrates situational awareness, proactive decision-making, teamwork communication, and the ability to debrief and learn — all qualities that appear directly in ELC person specifications."},
];

function STARModule(){
  const [active,setActive]=useState(0);
  const [tier,setTier]=useState("strong");
  const ex=STAR_EXAMPLES[active];
  const tierCol={weak:RUST,good:AMBER,strong:GREEN};
  const tierBg={weak:"#FEF2F2",good:"#FFFBEB",strong:"#F0FDF4"};
  return (
    <div>
      <PageHeader icon="⭐" title="STAR Examples" subtitle="Four worked examples specific to early years — the exact scenarios that appear in ELC interviews."/>
      <InfoBox text="Use 'I' not 'we'. Your interviewer is assessing you — not your team. Describe specifically what YOU did and what difference YOUR actions made." type="warning"/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16}}>
        {[{l:"S",w:"Situation",d:"Set the scene briefly."},{l:"T",w:"Task",d:"Your specific responsibility."},{l:"A",w:"Action",d:"What YOU did. Use 'I'."},{l:"R",w:"Result",d:"What happened? What did you learn?"}].map((item,i)=>(
          <div key={i} style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:10,padding:12}}>
            <div style={{width:30,height:30,borderRadius:6,background:ROSE,color:WHITE,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:16,marginBottom:6}}>{item.l}</div>
            <p style={{color:NAVY,fontWeight:700,fontSize:12,margin:"0 0 3px",textTransform:"uppercase"}}>{item.w}</p>
            <p style={{color:MID,fontSize:12,margin:0}}>{item.d}</p>
          </div>
        ))}
      </div>
      <NavTabBar options={STAR_EXAMPLES.map((e,i)=>({id:i,label:e.label}))} active={active} onSelect={(id)=>{setActive(id);setTier("strong");}}/>
      <Card><p style={{color:MID,fontSize:11,textTransform:"uppercase",margin:"0 0 5px"}}>Interview question</p><p style={{color:NAVY,fontWeight:800,fontSize:15,margin:0}}>"{ex.question}"</p></Card>
      <div style={{display:"flex",gap:6,marginBottom:12}}>
        {["weak","good","strong"].map(t=>(
          <button key={t} onClick={()=>setTier(t)} style={{flex:1,padding:"8px 4px",background:tier===t?tierCol[t]:WHITE,border:`2px solid ${tierCol[t]}`,color:tier===t?(t==="good"?NAVY:WHITE):tierCol[t],borderRadius:8,fontWeight:700,fontSize:11,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>
            {t==="weak"?"✗ Weak":t==="good"?"◎ Good":"✓ Strong"}
          </button>
        ))}
      </div>
      <div style={{background:tierBg[tier],borderLeft:`3px solid ${tierCol[tier]}`,borderRadius:10,padding:14,marginBottom:12}}>
        <p style={{color:tierCol[tier],fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 8px"}}>{tier==="weak"?"Weak answer":tier==="good"?"Good answer":"Strong answer"}</p>
        <p style={{color:"#333",fontSize:14,lineHeight:1.75,margin:0,fontStyle:"italic"}}>"{ex[tier]}"</p>
      </div>
      <div style={{background:"#EFF6FF",borderLeft:`3px solid ${TEAL}`,borderRadius:8,padding:12,marginBottom:16}}>
        <p style={{color:TEAL,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 4px"}}>Coach commentary</p>
        <p style={{color:"#1A5276",fontSize:13,lineHeight:1.65,margin:0}}>{ex.why}</p>
      </div>
    </div>
  );
}

// ─── INTERVIEW ────────────────────────────────────────────────────────────────
const INTERVIEW_QS=[
  {q:"Why do you want to work in Early Learning and Childcare?",tip:"Do not say 'I love children'. Say why early years specifically — the developmental stage, the impact, the learning context.",weak:"I love children and have always wanted to work with them. I think it would be really rewarding.",strong:"I want to work in early years because I believe it is where the most significant developmental work happens. The research on brain development in the first five years shows that these are the years where the foundations for learning, communication and emotional wellbeing are laid. What drew me specifically to this sector — rather than primary teaching, for example — is the relationship-based, play-led approach. I find the idea of planning learning through play, rather than formal instruction, genuinely exciting. I also want to work in a sector where job security is strong and where there are clear pathways to further qualification."},
  {q:"What do you understand by the key worker system?",tip:"This is a sector-specific question. Many candidates do not know the answer. Learn it before every interview.",weak:"The key worker is the main person who looks after a child in the nursery.",strong:"The key worker system is a way of organising practitioner relationships with children so that each child has a primary practitioner who knows them best — their preferences, developmental stage, family context and any additional needs. The key worker is the main point of contact for that child's family and takes responsibility for observing, planning for and reviewing the child's progress. Research on attachment theory — particularly Bowlby's and Ainsworth's work — supports the idea that children feel more secure and learn better when they have a consistent, trusted adult. The key worker relationship is also how information about a child is shared across the team so that care is consistent even when the key worker is not present."},
  {q:"How would you support a child who is struggling to settle?",tip:"Show understanding of attachment, individual differences and the role of routine. Mention working with the family.",weak:"I would try to comfort them and get them involved in an activity they enjoy.",strong:"I would first try to understand what is driving the difficulty — is it separation anxiety, a change in routine, sensory sensitivity or something happening at home? I would speak with the child's family to understand their experience at home and any strategies that have worked before. In the room, I would aim to provide consistent, warm presence without forcing interaction — following the child's lead. I would use familiar objects if the family has shared them, maintain predictable routines so the child can anticipate what comes next, and build trust gradually through play rather than direct instruction. I would also make sure the child's distress was not dismissed — acknowledged clearly and calmly: 'I can see you are missing mummy. That's okay. I'm here and we're going to be okay together.'"},
  {q:"How would you handle a disclosure from a child?",tip:"This is a safeguarding question. The answer must demonstrate correct procedure — many candidates get this wrong.",weak:"I would listen to the child and then tell my manager what they said.",strong:"If a child made a disclosure to me, I would listen calmly without showing shock or distress, use open, non-leading responses — 'tell me more about that' rather than specific questions — and not promise confidentiality. I would not probe for more information than the child offers. As soon as possible after the disclosure, I would report it to the setting's designated safeguarding lead, recording the child's exact words as accurately as possible. I would not discuss it with colleagues who are not involved in the response, and I would not contact the family myself. My role is to receive, record and report — not to investigate. I am also aware that the SSSC Code of Practice requires all registered workers to report concerns about child welfare and that failing to do so would be a serious breach of my professional obligations."},
  {q:"What is child-led learning and why does it matter?",tip:"Shows sector knowledge and genuine engagement with pedagogy.",weak:"Child-led learning means letting children choose what they want to do.",strong:"Child-led learning is an approach to early years education where the child's interests, questions and choices drive the learning experience, with the practitioner's role being to observe, facilitate and extend — rather than direct. It is rooted in theorists like Froebel, Dewey and Vygotsky, and is central to Scotland's Curriculum for Excellence at Early Level and the PreBirth to Three framework. The evidence base suggests that children learn most deeply when they are intrinsically motivated — when they are following their own curiosity. In practice it means planning the environment and resources around observed interests, asking open questions to extend thinking, and resisting the urge to step in and solve problems for children. It also requires careful observation and documentation to demonstrate that learning is progressing."},
  {q:"What would you do if you disagreed with how a colleague handled a situation?",tip:"Shows professional maturity and understanding of team dynamics.",weak:"I would probably say nothing and just do it the way I thought was right.",strong:"My first instinct would be to reflect on whether I was correct — a more experienced colleague might have context or knowledge I did not have. If after reflection I still had a genuine concern, I would speak to the colleague privately and calmly, framing it as a question rather than a criticism: 'I noticed you handled that situation in X way — I was wondering about Y approach. Can you help me understand your thinking?' If the concern was about something that affected a child's safety or wellbeing, I would escalate to the room leader regardless of any discomfort about raising it. I understand that team culture in early years settings depends on practitioners being able to raise concerns honestly and that silence about poor practice is not professionalism — it is a risk."},
  {q:"What questions do you have for us?",tip:"Never say none. Have at least 3. Sector-specific questions signal genuine commitment.",weak:"No — I think you have covered everything, thank you.",strong:"I have three. First — how does the setting approach the key worker system and how are key group allocations made for apprentices? Second — I read your most recent Care Inspectorate report and noted the inspectors highlighted your outdoor learning provision as a real strength. Could you tell me more about how that is embedded in the daily programme? Third — what does the CPD pathway look like for apprentices during and after the MA? I am thinking specifically about whether there is support for working towards the Graduate Apprenticeship route after the SVQ."},
];

function InterviewModule(){
  const [current,setCurrent]=useState(0);
  const [reveal,setReveal]=useState(null);
  const q=INTERVIEW_QS[current];
  return (
    <div>
      <PageHeader icon="🎤" title="Interview Preparation" subtitle="7 sector-specific questions including values-based interviewing, safeguarding scenarios and what to ask at the end."/>
      <InfoBox text="ELC employers increasingly use values-based interviewing — asking about your motivations, ethics and approach rather than just your competencies. Prepare for 'why' questions as well as 'how' questions." type="info"/>
      <NavTabBar options={INTERVIEW_QS.map((_,i)=>({id:i,label:`Q${i+1}`}))} active={current} onSelect={(id)=>{setCurrent(id);setReveal(null);}}/>
      <Card>
        <p style={{color:MID,fontSize:11,textTransform:"uppercase",margin:"0 0 5px"}}>Interview question</p>
        <p style={{color:NAVY,fontWeight:800,fontSize:15,margin:"0 0 12px"}}>"{q.q}"</p>
        <div style={{background:"#EFF6FF",borderLeft:`3px solid ${TEAL}`,borderRadius:8,padding:"9px 11px"}}>
          <p style={{color:"#1A5276",fontSize:13,lineHeight:1.6,margin:0}}>💡 <strong>Coach tip:</strong> {q.tip}</p>
        </div>
      </Card>
      <div style={{display:"flex",gap:8,marginBottom:12}}>
        <button onClick={()=>setReveal(reveal==="strong"?null:"strong")} style={{flex:1,padding:10,background:reveal==="strong"?GREEN:WHITE,border:`2px solid ${GREEN}`,color:reveal==="strong"?WHITE:GREEN,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{reveal==="strong"?"Hide":"✓ Strong Answer"}</button>
        <button onClick={()=>setReveal(reveal==="weak"?null:"weak")} style={{flex:1,padding:10,background:reveal==="weak"?RUST:WHITE,border:`2px solid ${RUST}`,color:reveal==="weak"?WHITE:RUST,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{reveal==="weak"?"Hide":"✗ Weak Answer"}</button>
      </div>
      {reveal==="strong"&&<div style={{background:"#F0FDF4",borderLeft:`3px solid ${GREEN}`,borderRadius:10,padding:14,marginBottom:12}}><p style={{color:GREEN,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 8px"}}>Strong Answer</p><p style={{color:"#14532D",fontSize:14,lineHeight:1.7,margin:0}}>{q.strong}</p></div>}
      {reveal==="weak"&&<div style={{background:"#FEF2F2",borderLeft:`3px solid ${RUST}`,borderRadius:10,padding:14,marginBottom:12}}><p style={{color:RUST,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 8px"}}>Weak Answer</p><p style={{color:"#7F1D1D",fontSize:14,lineHeight:1.7,margin:0}}>{q.weak}</p></div>}
      <Card>
        <p style={{color:TEAL,fontWeight:700,fontSize:12,margin:"0 0 8px",textTransform:"uppercase"}}>🎤 Practise your answer</p>
        <textarea placeholder="Type your answer using the STAR method..." rows={4} style={{width:"100%",background:GREY,border:"1px solid #E2E8F0",borderRadius:8,padding:12,color:NAVY,fontSize:13,fontFamily:"inherit",resize:"vertical",boxSizing:"border-box"}}/>
        <p style={{color:MID,fontSize:12,marginTop:8,marginBottom:0}}>💡 Paste into the AI Coach for feedback.</p>
      </Card>
    </div>
  );
}

// ─── SAFEGUARDING ─────────────────────────────────────────────────────────────
function SafeguardModule(){
  return (
    <div>
      <PageHeader icon="🛡️" title="Safeguarding and PVG" subtitle="Scotland's mandatory requirements for childcare workers — what you must know before every interview."/>
      <InfoBox text="This is the section most ELC candidates underestimate. Employers take safeguarding knowledge seriously from day one. A candidate who cannot speak to PVG, SSSC and their safeguarding responsibilities will not be offered a role." type="warning"/>
      <Accordion accent={ROSE} items={[
        {title:"The PVG Scheme — what it is and why it matters",content:"The Protecting Vulnerable Groups (PVG) Scheme is Scotland's enhanced disclosure system for people working with children or protected adults. It is managed by Disclosure Scotland and is mandatory for all childcare workers in Scotland.\n\nKey facts:\n• The PVG is not the same as a basic DBS check (which is the English equivalent). It is more comprehensive.\n• The PVG scheme membership is ongoing — it is not a one-time check. New information that is added to your record after joining can be shared with employers.\n• You cannot work in an ELC setting in Scotland without PVG scheme membership.\n• Your employer is responsible for initiating the PVG check and pays the fee — you do not need to arrange or pay for it yourself.\n• Having a criminal conviction does not automatically bar you from PVG scheme membership. The nature, seriousness and relevance of any conviction is assessed individually.\n\nAt interview, you should be able to say: 'I understand that PVG scheme membership is mandatory for this role. I am aware of the process and am ready to complete my application as part of my onboarding.'\n\nNever claim to already have a PVG if you don't — the employer will check."},
        {title:"SSSC Registration — the mandatory professional register",content:"The Scottish Social Services Council (SSSC) is the professional regulator for the social services workforce in Scotland. All childcare practitioners must be registered.\n\nAs a Modern Apprentice, you register as a Student Practitioner. When you complete your SVQ qualification, you move to Practitioner level registration.\n\nWhat SSSC registration requires:\n• A relevant qualification (your SVQ Level 6 upon completion)\n• Employer references confirming your practice\n• A signed declaration of your fitness to practise\n• Commitment to the SSSC Codes of Practice\n• Ongoing CPD (Continuing Professional Development) to maintain registration\n\nThe SSSC Codes of Practice set out what is expected of registered workers — including duties around safeguarding, confidentiality, honesty with employers and service users, and professional boundaries. You should read the Codes before your interview.\n\nSSCS registration is not optional. Working in an ELC setting without being registered (or in the process of registering) is a serious breach. Employers take this very seriously."},
        {title:"Child Protection in Scotland — the legal framework",content:"Scotland's child protection framework is distinct from England's. Key elements you must know:\n\nGetting it Right for Every Child (GIRFEC)\nGIRFEC is Scotland's national approach to supporting children's wellbeing. It uses a wellbeing wheel with 8 indicators — Safe, Healthy, Achieving, Nurtured, Active, Respected, Responsible, Included (SHANARRI). Every practitioner in a Scottish childcare setting works within this framework.\n\nThe Named Person scheme\nSince 2016, Scotland has moved towards every child having a Named Person — a professional who acts as a single point of contact for the child's welfare. In nursery settings this is often the room leader or nursery manager.\n\nChild Protection Committees\nEach Scottish council has a Child Protection Committee that sets local procedures. Nurseries work within the procedures set by their local CPC.\n\nMandatory reporting\nAll childcare workers in Scotland are expected to report any concerns about a child's welfare. You are not expected to investigate — you are expected to report to your designated safeguarding lead.\n\nAt interview, demonstrating awareness of GIRFEC and the SHANARRI wellbeing indicators will immediately distinguish you from candidates who only know generic safeguarding concepts."},
        {title:"What to say at interview about safeguarding",content:"Safeguarding comes up in some form in virtually every ELC interview. Here is how to handle the most common scenarios:\n\n'What would you do if a child made a disclosure to you?'\nI would listen calmly without showing shock, use open responses rather than leading questions, and not promise confidentiality. As soon as possible, I would report to the designated safeguarding lead, recording the child's exact words. My role is to receive, record and report — not to investigate.\n\n'What does safeguarding mean to you in an ELC context?'\nSafeguarding in early years means more than child protection. It means creating an environment where children feel physically safe, emotionally secure, and protected from harm — both within the setting and in their wider lives. It includes safe sleep practices, outdoor safety, food safety, appropriate physical contact, confidentiality, and the duty to report concerns about home circumstances as well as incidents in the setting.\n\n'How would you maintain appropriate boundaries with children and families?'\nI would follow the setting's policies on physical contact, information sharing and communication with families. I would not share personal contact details with families, use personal social media to communicate with families or children, or discuss other children's information with families. I understand that professional boundaries protect children, families and practitioners."},
        {title:"Safe Recruitment — what employers do and what you should expect",content:"ELC settings in Scotland operate strict safe recruitment procedures. As an applicant you should expect:\n\n• Application form: a declaration of any convictions (including spent convictions in this context)\n• Interview: questions about your understanding of safeguarding and professional boundaries\n• References: at least two references, typically including your most recent employer or school\n• PVG check: initiated by the employer as part of your offer\n• SSSC registration: confirmation of your registration or student registration application\n• Induction: formal safeguarding training as part of your first weeks in post\n\nIf at any point during your employment you are charged with or convicted of an offence relevant to working with children, you have a duty to inform your employer and the SSSC immediately. Failure to do so is a serious breach of the SSSC Codes of Practice."},
      ]}/>
    </div>
  );
}

// ─── COACHING ─────────────────────────────────────────────────────────────────
function CoachingModule(){
  const [week,setWeek]=useState(0);
  const sessions=[
    {num:1,title:"Introduction and mindset",icon:"🔍",joint:true,aim:"Establish a shared understanding of ELC Modern Apprenticeships and open a positive conversation between young person and parent/carer.",tasks:["Present the facts: MA is a paid job from day one, entry at 16+, leads to SVQ Level 6/7, no tuition debt","Discuss: what do you already know about childcare as a career?","Debunk myths: apprenticeships are not for people who could not go to university","Introduce Scotland's 1140 hours ELC expansion and what it means for job security","Set up email alerts on Apprenticeships.scot and MyJobScotland"],parentTip:"Your job this session is to listen more than you direct. Ask what appeals to them about the sector — not what you think should appeal.",activity:"Each person writes down 3 things they think the job involves. Compare. Discuss what was surprising."},
    {num:2,title:"Skills inventory",icon:"📝",joint:false,aim:"Extract all potential CV content from the young person's background — school, college, jobs, volunteering, informal care and personal responsibilities.",tasks:["List every activity: subjects, sports, clubs, jobs, caring roles, hobbies","For each, identify 1–2 skills demonstrated with a specific example","Practice the Action + Skill + Outcome formula on 3 examples","Complete a skills bank worksheet: Activity → Skill → Specific example","Identify 2 STAR examples (Situation, Task, Action, Result) ready to use in CV and interviews"],parentTip:"Help them see professional value in everyday experience. Looking after siblings demonstrates responsibility and time management. Babysitting demonstrates reliability and independent childcare judgment.",activity:"For each of the following, write one CV bullet together: a school subject, a caring or volunteering role, any paid job or home responsibility."},
    {num:3,title:"CV drafting — structure",icon:"📄",joint:false,aim:"Produce a first draft CV structure. Focus on sections and content — polish comes in Session 4.",tasks:["Read the CV section of this module — understand each section's purpose","Draft the personal profile using the prompts: who you are, what specific experience you have, what you want","Draft the Key Skills section using language from a real ELC job advert","Outline the Education section with all qualifications and relevant courses","Outline the Experience section with all paid, voluntary and informal roles"],parentTip:"Do not write the CV for them. Sit beside them while they type. Ask questions that generate their content: what did you actually do in that role? What was the outcome?",activity:"Read the drafted personal profile aloud. Does it sound like them? Does it mention early years specifically? Does it include any actual evidence, or is it all claims?"},
    {num:4,title:"CV drafting — writing and review",icon:"✏️",joint:false,aim:"Finalise the CV. Every experience bullet should use an action verb and include a specific detail.",tasks:["Work through each experience bullet using the Action + Skill + Outcome formula","Check: does every bullet start with a strong verb?","Check: does at least one bullet include a specific number?","Check: does the CV mention SSSC and PVG commitment?","Paste the draft into the AI Coach for feedback and make one round of revisions"],parentTip:"Be honest in feedback — kind but specific. 'That bullet is a bit vague — can you tell me exactly what you did and how many children were involved?' is more useful than 'That's good.'",activity:"Take the weakest experience bullet in the draft. Rewrite it together using Action + Skill + Outcome."},
    {num:5,title:"Interview preparation",icon:"🎤",joint:false,aim:"Build confidence and practical skill for ELC-specific interviews through structured practice.",tasks:["Read the Interview tab — study the strong answer examples","Run a mock interview using the 7 questions in this module","Record one answer on a phone — watch it back and note pace, eye contact and clarity","Prepare 3 questions to ask the interviewer — including a reference to the Care Inspectorate report","Research the specific nursery or council before any real interview"],parentTip:"Role-play the hardest question first: 'How would you handle a disclosure from a child?' If they can answer that confidently, the rest of the interview will feel manageable by comparison.",activity:"Role-play the safeguarding question: 'What would you do if a child made a disclosure to you?' Use the correct procedure: receive, record, report."},
    {num:6,title:"Application strategy",icon:"📮",joint:false,aim:"Submit first applications and build the habit of regular, targeted applying.",tasks:["Choose 2–3 real vacancies — one council via MyJobScotland, one private nursery","For each: read the person specification and adjust the CV profile and skills section","Submit the applications — do not wait for the CV to be perfect","Set up a simple tracking note: employer, role, date applied, outcome","Identify 3 more roles to apply to in the following two weeks"],parentTip:"Quality over quantity. Two tailored applications will consistently outperform ten generic ones. Help them resist the pressure to spray and hope.",activity:"Take one council job advert. List every Essential criterion in the person specification. Check how many are addressed in the supporting statement. Any missing?"},
    {num:7,title:"Parent/carer workshop",icon:"🏠",joint:true,aim:"Equip parents and carers with the knowledge and skills to support without taking over.",tasks:["Present data on ELC MA benefits: paid from day one, strong job security, clear progression","Discuss how to start the conversation at home — open questions, not instructions","Role-play: parent responding to a discouraged young person who says 'I'm not good enough for this'","Discuss what not to do: write the CV for them, compare to other young people, express anxiety about their future","Provide conversation scripts for the four most common difficult situations"],parentTip:"Your emotional response to their rejections is one of the most powerful signals you send. Practice the phrase: 'That's disappointing. What can we learn from it? What's next?'",activity:"Together, write down 3 things the young person is genuinely better at now than they were at the start of this programme. These are evidence of real progress — say so explicitly."},
    {num:8,title:"Final wrap and resilience",icon:"💪",joint:true,aim:"Consolidate learning, build forward momentum and establish the ongoing habits that lead to success.",tasks:["Review what has worked in the programme — what skills have improved?","Analyse any rejections constructively: what information do they provide?","Update the CV with anything new since Session 3 — new experience, course completed, new reference","Set a 2-week plan: specific applications to complete, specific preparation to do","Choose 2–3 positive affirmations from the Resilience section and commit to using them daily"],parentTip:"The work does not stop here. The 8 sessions build habits and skills. Help them see the application process as ongoing — not something to finish, but something to maintain.",activity:"Each person shares one thing they will do differently in the next application because of this programme."},
  ];
  const s=sessions[week];
  return (
    <div>
      <PageHeader icon="📅" title="8-Session Coaching Programme" subtitle="A structured plan for practitioners, careers advisers and parents working with young people through the ELC application process."/>
      <InfoBox text="Sessions 1, 7 and 8 involve parents and the young person together. Sessions 2–6 are youth-focused. Adapt the pace — some sessions may take two weeks. That is fine." type="info"/>
      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:14}}>
        {sessions.map((s,i)=>(
          <button key={i} onClick={()=>setWeek(i)} style={{background:week===i?NAVY:WHITE,color:week===i?WHITE:MID,border:`1px solid ${week===i?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:week===i?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>
            S{s.num} {s.icon}
          </button>
        ))}
      </div>
      <Card>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:4}}>
          <span style={{fontSize:22}}>{s.icon}</span>
          <div>
            <p style={{color:MID,fontSize:11,margin:0,textTransform:"uppercase",letterSpacing:0.5}}>Session {s.num} {s.joint?"· Joint (youth + parent)":"· Youth"}</p>
            <p style={{color:NAVY,fontWeight:800,fontSize:15,margin:0}}>{s.title}</p>
          </div>
        </div>
        <div style={{height:2,width:32,background:AMBER,borderRadius:2,marginBottom:12,marginTop:6}}/>
        <p style={{color:TEAL,fontSize:11,fontWeight:700,textTransform:"uppercase",margin:"0 0 6px"}}>Aim</p>
        <p style={{color:"#444",fontSize:14,lineHeight:1.65,margin:"0 0 14px"}}>{s.aim}</p>
        <p style={{color:TEAL,fontSize:11,fontWeight:700,textTransform:"uppercase",margin:"0 0 8px"}}>Tasks</p>
        {s.tasks.map((t,i)=>(
          <div key={i} style={{display:"flex",gap:10,marginBottom:8,alignItems:"flex-start"}}>
            <div style={{width:20,height:20,border:`2px solid ${AMBER}`,borderRadius:4,flexShrink:0,marginTop:1}}/>
            <p style={{color:"#444",fontSize:13,lineHeight:1.55,margin:0}}>{t}</p>
          </div>
        ))}
        <div style={{background:"#EFF6FF",borderLeft:`3px solid ${TEAL}`,borderRadius:8,padding:"10px 12px",margin:"14px 0"}}>
          <p style={{color:TEAL,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 4px"}}>Coach/parent tip</p>
          <p style={{color:"#1A5276",fontSize:13,lineHeight:1.65,margin:0}}>{s.parentTip}</p>
        </div>
        <div style={{background:"#FAF5FF",borderLeft:`3px solid #6B21A8`,borderRadius:8,padding:"10px 12px"}}>
          <p style={{color:"#6B21A8",fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 4px"}}>Session activity</p>
          <p style={{color:"#3B0764",fontSize:13,lineHeight:1.65,margin:0}}>{s.activity}</p>
        </div>
      </Card>
      <div style={{display:"flex",gap:10}}>
        {week>0&&<button onClick={()=>setWeek(w=>w-1)} style={{flex:1,padding:12,background:WHITE,border:"1px solid #E2E8F0",color:NAVY,borderRadius:8,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>← Previous</button>}
        {week<sessions.length-1&&<button onClick={()=>setWeek(w=>w+1)} style={{flex:1,padding:12,background:AMBER,border:"none",color:NAVY,borderRadius:8,fontWeight:800,cursor:"pointer",fontFamily:"inherit"}}>Next session →</button>}
      </div>
    </div>
  );
}

// ─── AI COACH ─────────────────────────────────────────────────────────────────
function CoachModule(){
  const [messages,setMessages]=useState([{role:"assistant",content:"I am your TASS Early Years and Childcare Coach.\n\nI can help you with:\n• Mock interview practice — I will ask real ELC interview questions and give specific feedback\n• CV feedback — paste your draft and I will review it section by section\n• STAR answer building — share a real experience and I will help you structure it\n• Safeguarding preparation — test your knowledge of PVG, SSSC and child protection procedure\n• Supporting statement guidance — for MyJobScotland council applications\n• Sector-specific knowledge — GIRFEC, SSSC Codes, key worker system, play-based learning\n\nWhat would you like to work on?"}]);
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
  const bottomRef=useRef(null);
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[messages]);

  const PROMPTS=["I have an interview at a council nursery next week — help me prepare","Can you check my CV personal profile?","I want to build a STAR answer about a time I noticed a child was upset","What is the PVG scheme and will I need one?","I am writing a supporting statement for MyJobScotland — can you help?","What is the key worker system and how do I explain it at interview?"];

  async function send(){
    if(!input.trim()||loading)return;
    const userMsg=input.trim(); setInput("");
    const newMsgs=[...messages,{role:"user",content:userMsg}];
    setMessages(newMsgs); setLoading(true);
    try{
      const res=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        model:"claude-sonnet-4-5-20250929",max_tokens:1000,
        system:`You are the TASS Early Years and Childcare Coach — a direct, expert careers coach helping young people (16–29) in Scotland secure Early Learning and Childcare Modern Apprenticeships.

Your approach:
- Specific and direct — no vague encouragement. Give actual next steps.
- Scotland-specific: you know the Scottish ELC framework thoroughly — SVQ Level 6/7, SSSC registration, PVG scheme (not DBS — that is England), Disclosure Scotland, GIRFEC, SHANARRI, Curriculum for Excellence Early Level, PreBirth to Three framework, Care Inspectorate Scotland, the 1140 hours ELC expansion, MyJobScotland, Apprenticeships.scot.
- Safeguarding knowledge: you know the correct procedure for handling disclosures (receive, record, report — not investigate), the role of the designated safeguarding lead, the SSSC Codes of Practice, and the importance of professional boundaries.
- ELC-specific interview knowledge: you know the key worker system, child-led learning, attachment theory (Bowlby, Ainsworth), values-based interviewing, and the sector-specific questions that appear in ELC panel interviews.
- CV expertise: early years CVs must evidence soft skills specifically, mention SSSC and PVG commitment, use sector language (key worker, play-based learning, GIRFEC, observation, documentation) and demonstrate direct experience with children — paid, voluntary or informal.

When running mock interviews:
- Ask one question at a time from the ELC-specific question bank
- After each answer, give specific feedback: what was strong, what was weak, then show an improved version
- Prioritise the safeguarding question early — it is the one most candidates underestimate

When reviewing CVs:
- Check for: sector-specific language, SSSC/PVG mention, evidence (not just claims), action verbs, quantification, 'I' not 'we'
- Show specific improved versions of weak bullets

Key phrases to reinforce: GIRFEC, SHANARRI wellbeing indicators, PVG scheme, Disclosure Scotland, SSSC registration, Care Inspectorate, key worker relationship, child-led learning, play-based approach, transitions, attachment.

Keep responses focused and mobile-friendly.`,
        messages:newMsgs.map(m=>({role:m.role,content:m.content}))
      })});
      const data=await res.json();
      const reply=data.content?.[0]?.text||"Connection issue — please try again.";
      setMessages([...newMsgs,{role:"assistant",content:reply}]);
    }catch{setMessages([...newMsgs,{role:"assistant",content:"Connection issue — please try again."}]);}
    setLoading(false);
  }

  return (
    <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 180px)",minHeight:480}}>
      <div style={{background:"#EFF6FF",borderLeft:`3px solid ${TEAL}`,borderRadius:8,padding:"9px 13px",marginBottom:10}}>
        <p style={{color:"#1A5276",fontSize:13,margin:0}}>💡 Ask anything — CV feedback, mock interviews, safeguarding prep or sector knowledge. The more specific you are, the more useful the feedback.</p>
      </div>
      <div style={{display:"flex",gap:6,marginBottom:10,overflowX:"auto",paddingBottom:4}}>
        {PROMPTS.map((p,i)=><button key={i} onClick={()=>setInput(p)} style={{background:TEAL+"15",border:`1px solid ${TEAL}40`,color:TEAL,borderRadius:99,padding:"5px 11px",whiteSpace:"nowrap",fontSize:11,fontWeight:600,cursor:"pointer",flexShrink:0,fontFamily:"inherit"}}>{p}</button>)}
      </div>
      <div style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:12,paddingRight:4,paddingBottom:8}}>
        {messages.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
            <div style={{maxWidth:"88%",padding:"10px 14px",borderRadius:m.role==="user"?"14px 14px 4px 14px":"14px 14px 14px 4px",background:m.role==="user"?NAVY:WHITE,color:m.role==="user"?WHITE:NAVY,fontSize:13,lineHeight:1.7,whiteSpace:"pre-wrap",border:m.role==="assistant"?"1px solid #E2E8F0":"none",boxShadow:m.role==="assistant"?"0 1px 4px rgba(0,0,0,0.06)":"none"}}>{m.content}</div>
          </div>
        ))}
        {loading&&<div style={{display:"flex",justifyContent:"flex-start"}}><div style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:"14px 14px 14px 4px",padding:"11px 15px",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}><div style={{display:"flex",gap:4}}>{[0,1,2].map(i=><div key={i} style={{width:6,height:6,background:TEAL,borderRadius:99,animation:`b 1.2s ${i*0.2}s infinite`}}/>)}</div></div></div>}
        <div ref={bottomRef}/>
      </div>
      <div style={{display:"flex",gap:8,marginTop:10}}>
        <textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}} placeholder="Ask your coach anything, or paste your CV or STAR answer for feedback..." rows={3} style={{flex:1,background:WHITE,border:"1px solid #E2E8F0",borderRadius:10,padding:"10px 13px",color:NAVY,fontSize:13,fontFamily:"inherit",resize:"none",minHeight:60,boxSizing:"border-box",lineHeight:1.65}}/>
        <button onClick={send} disabled={loading||!input.trim()} style={{background:input.trim()?TEAL:"#E2E8F0",border:"none",color:input.trim()?WHITE:"#999",borderRadius:10,padding:"0 16px",cursor:input.trim()?"pointer":"default",fontSize:20}}>↑</button>
      </div>
      <style>{`@keyframes b{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}`}</style>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function TASSEarlyYears(){
  const [tab,setTab]=useState("home");
  const current=TABS.find(t=>t.id===tab);
  return (
    <div style={{fontFamily:"'Segoe UI', system-ui, sans-serif",background:GREY,minHeight:"100vh",color:NAVY}}>
      <style>{`* { box-sizing: border-box; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: ${GREY}; } ::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 4px; } textarea:focus, button:focus { outline: 2px solid ${TEAL}; outline-offset: 2px; }`}</style>
      {tab!=="home"&&(
        <div style={{background:`linear-gradient(135deg, ${NAVY} 0%, #1A3060 100%)`,padding:"12px 16px",display:"flex",alignItems:"center",gap:12,position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}>
          <TASSLogo size="sm" theme="dark"/>
          <div style={{width:1,height:32,background:"rgba(255,255,255,0.15)",margin:"0 4px"}}/>
          <div style={{flex:1}}>
            <div style={{color:"rgba(255,255,255,0.6)",fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:0.5}}>Early Years and Childcare</div>
            <div style={{color:WHITE,fontSize:13,fontWeight:700,marginTop:2}}>{current?.icon} {current?.label}</div>
          </div>
        </div>
      )}
      <div style={{maxWidth:640,margin:"0 auto",padding:"20px 16px 110px"}}>
        {tab==="home"      &&<HomeModule setTab={setTab}/>}
        {tab==="sector"    &&<SectorModule/>}
        {tab==="pathways"  &&<PathwaysModule/>}
        {tab==="apply"     &&<ApplyModule/>}
        {tab==="mjs"       &&<MJSModule/>}
        {tab==="cv"        &&<CVModule/>}
        {tab==="star"      &&<STARModule/>}
        {tab==="interview" &&<InterviewModule/>}
        {tab==="safeguard" &&<SafeguardModule/>}
        {tab==="coaching"  &&<CoachingModule/>}
        {tab==="coach"     &&<CoachModule/>}
      </div>
      <div style={{position:"fixed",bottom:0,left:0,right:0,background:WHITE,borderTop:"1px solid #E2E8F0",display:"flex",justifyContent:"center",padding:"8px 2px 12px",zIndex:100,boxShadow:"0 -2px 12px rgba(0,0,0,0.06)"}}>
        {TABS.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,maxWidth:52,background:"none",border:"none",cursor:"pointer",padding:"5px 2px",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
            <div style={{fontSize:13,filter:tab===t.id?"none":"grayscale(1) opacity(0.3)"}}>{t.icon}</div>
            <div style={{fontSize:6,color:tab===t.id?TEAL:"#999",fontWeight:tab===t.id?800:400,textTransform:"uppercase",letterSpacing:"0.02em"}}>{t.label.substring(0,5)}</div>
            {tab===t.id&&<div style={{width:12,height:2,background:TEAL,borderRadius:2}}/>}
          </button>
        ))}
      </div>
    </div>
  );
}

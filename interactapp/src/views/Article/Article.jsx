import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/blogData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { LoremIpsum } from "lorem-ipsum";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './style.css';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 10,
    min: 4
  }
});

const Article = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <div style={{marginTop:160}}>
      <p className='publishing-date'>Publicat in data de {blog?.date}</p>
      <h1 className='title-article' style={{marginRight:10+"%", marginLeft:10+"%", color: "#112035", textAlign:'center'}}>{blog?.title}</h1>
      <p className='subtitle-article' style={{textAlign:'center'}}>{blog?.subtitle}</p>
      <p style={{textAlign:'center', marginTop:30, fontSize:17}}>scris de {blog?.author}</p>
      <div style={{textAlign:'center', marginTop:-10, marginBottom:30}}><AccessTimeIcon style={{fontSize:20, marginBottom:-5}}></AccessTimeIcon> {blog?.time} </div>
      <div style={{display: 'flex', justifyContent:'center'}}>
        <Card className='image-card' >
            <CardMedia className='card-img' component="img" image={blog?.landscapeImg}/>
        </Card>
      </div>
      <h3 className='article'>{blog?.paragraph1}</h3>
      { blog?.title == 'Despre Pălăvrăgeală Poetică' &&
        <h3 className='article'>Evenimentul a avut loc la L’Autre Café Cluj-Napoca. În prima parte a serii de poezie, invitații noștri, mari poeți publicați din România - Șerban Mark Pop, Olga Ștefan, Lena Chilari și Mark Paul Precup - au vorbit pe scenă despre experiențele lor, au oferit sfaturi tinerilor pasionați de poezie și ne-au încântat cu zâmbete și voie bună. Apoi, a urmat ca publicul de tineri poeți să își citească creațiile.
           Au început membrii Interact Transilvania, pentru a deschide atmosfera și a încuraja lumea, iar apoi a urmat, pe rând, fiecare om din public dornic să ne ofere puțin din sufletul său. La final, au urcat iar invitații noștri pe scenă, oferind publicului feedback și citindu-și propriile poezii. Le-am luat și interviu acestor poeți, îl puteți citi într-un articol separat de pe blogul nostru, intitulat  
           <a href="/blog/1">“În conversație cu noua generație de poeți“</a>, de la secțiunea Interact Transilvania.
        </h3>

      }
      <h3 className='article'>{blog?.paragraph2} 
      { blog?.title == 'În conversație cu noua generație de poeți' &&
        <a href="/blog/2">Pălăvrăgeală Poetică</a>

      }</h3>
      <h3 className='article'>{blog?.paragraph3}</h3>
      { blog?.title == 'În conversație cu noua generație de poeți' &&
        <em className='article'>{blog?.q1}</em>
      }
      <h3 className='article'>{blog?.paragraph4}</h3>
      { blog?.title == 'În conversație cu noua generație de poeți' &&
        <em className='article'>{blog?.q2}</em>
      }
      <h3 className='article' >{blog?.paragraph5}</h3>
      {blog?.title == 'Despre Pălăvrăgeală Poetică' &&
        <div className='poetry'>
          <em>
            Se pot auzi multe în Piața Unirii în iulie <br />
            Pe lângă sirene de ambulanță și claxoane nervoase <br />
            Cum sunt foarte mulți oameni <br />
            Auzi mai din greșeală mai intenționat <br />
            Secvențe micuțe din viețile lor și îți aduci aminte că nu ești numai tu pe lume <br />
            Mai ales de la bătrâni pentru că ei de obicei urlă când vorbesc la telefon <br />
            Așa mergând acasă deloc în grabă <br />
            Când treceam pe lângă Muzeul de Artă <br />
            Am auzit un bărbat undeva între 50 și 70 de ani <br />
            Nu știu aproxima <br />
            Cum zicea cuiva la telefon <br />
            Revoltat <br />
            Aprins <br />
            "Mi-ai răscolit tătă viața mea mi-ai răscolit-o" <br />
            Aproape o certa <br />
            Și mi s-a părut frumos <br />
            Și mi-am notat <br />
            Poate nu îi spunea iubirii vieții lui <br />
            Dar eu așa vreau să-mi imaginez <br />
            Și sper că într-o zi să mă certe cineva și pe mine așa <br />
            Frumos <br /> <br />
            de Daria Beșe <br /> <br /><br />

            Am o relație toxică cu cafeaua <br />
            Mă agită și mă face să tremur <br />
            mă doare burta de la câtă anxietate îmi dă <br />
            Însă când îi simt gustul amar pe stomacul gol <br />
            Mă simt cea mai frumoasă fată din lume <br /><br />
            
            Am o relație toxică cu cafeaua <br />
            O vreau cât mai simplă și singură <br />
            Mă sperie când e cu zahăr și lapte <br /><br />
            
            Am încercat să-mi pun lapte și zahăr în cafea<br />
            Chiar de mai multe ori<br />
            Însă de fiecare dată ajung să torn cafeaua aia spălăcită în chiuvetă<br />
            Pentru că dulcele dintr-o cafea de dimineață mă face palidă la față, mă îngrozește<br />
            Mă face să mă simt dezgustător<br /><br />
            
            Ador aerul de maturitate și seriozitate pe care mi-l dă<br />
            Cred că maschează bine ura pentru un stomac plin.<br />
            Ador durerea de cap care mă lovește imediat după<br />
            Și cel mai mult din lume ador faptul că ăsta este principalul lucru care mă leagă pe mine și pe mama;<br />
            Iubirea pentru cafeaua neagră și frica de calorii<br /><br />
            din mamă în fiică, de Daria Beșe <br /><br /><br />

            O moarte vie cu ochi de sticlă<br />
            mă privește din oglindă.<br />
            Și țip și urlu fără să mă pot mișca<br />
            și-arunc cu bolovani către ea,<br />
            dar bolovanii sunt scoși din mintea mea.<br />
            Oglinda nu se sparge,<br />
            ochii de sticlă se holbează triști. <br />
            E-un vis aiurea, că am ochii închiși, <br />
            dar îi pierd, se încețoșează și reci,<br />
            devin ochii din oglindă,<br />
            sferele tocite de sticlă.<br /><br />
            
            Visul se continuă până mă trezesc într-un coșmar, <br />
            în care farfuriile pică pe tavan,<br />
            și mi se sparg pe piept<br />
            ca niște replici tăioase spuse de oameni care se iubesc,<br />
            când simt că viața nu mai are sens.<br />
            Iubirea-i depășită și rămâne în urmă,<br />
            ținând niște sfere de sticlă în mână.<br />
            Nu știe ce să facă cu ele, <br />
            [Să le arunce!] mai bine le-ar sparge...<br />
            dar este prea bună și vrea numai pace.<br />
            Un lac adormit și-nghețat șoptește o istorie scurtă.<br /><br />
            
            Iubirea o cheamă, îl ascultă.<br />
            Tiptil se îndreaptă, pășește pe gheață. <br />
            Aceasta se sparge, o îneacă. <br />
            Sferele de sticlă rămân la suprafață pe o bucată de apă-nghețată.<br />
            Sub ele Iubirea e moartă.<br />
            De sus privesc acest coșmar gol, <br />
            din tot ce-a fost Iubirea,<br />
            rămâne-un umăr gol.<br />
            Care se scufundă încet, încet mereu.<br />
            La fel cum cad și eu.<br /><br />
            
            O Moarte vie cu ochi de sticlă <br />
            mă privește din oglindă<br />
            și șoptește vorbe sure:<br />
            despre cum e în pădure, <br />
            despre cum Iubirea moare,<br />
            iar eu privesc din depărtare, <br />
            și neputința mă îngroapă <br />
            și mă trezesc cu-n corp de gheață <br />
            și vad doar curcubeie gri,<br />
            că sticla mi se aburi<br />
            de la ultima suflare<br />
            a Iubirii care moare.<br /><br />
            de Raluca Pop <br /><br /><br />

            Câte scuze vor umple golul? <br />
            Pe mal singur îi duc dorul<br />
            Înec durerea în zahăr și sare<br />
            Dar ea apasă tot mai tare<br />
            Nu dispare.<br />
            
            Lacul stins, ca bunica<br />
            Îmi alină discret pupila<br />
            Ah, dulce copilărie îndepărtată<br />
            Viața de adult îi al naibii de sărată<br />
            Nu iartă.<br /><br />
            
            Frigul îmi îngheață nasu’<br />
            Degetele pe ecranul albastru<br />
            Scriu și ele cât mai pot<br />
            Durerea unui simplu idiot<br />
            Nu mai pot.<br />
            
            Zahăr și sare oare aș putea<br />
            Face un dulce echilibru în viața mea?<br />
            Că e cumplit cum arată<br />
            O inimă de viitor speriată<br />
            E sărată.<br /><br />
            Zahăr și sare, de Petriu Tudor<br /><br /><br />


            Cu picioarele pe masă, <br />
            Cu mănușile pe podea,<br />
            Parcă ar vrea odată din obiect să iasă,<br />
            Să fie mai tangibil decât tronul pe care-l vrea.<br />
            Atunci poate ar exista,<br />
            Dar noi stăm la masă.<br />
            E o schismă de sine,<br />
            O minciună despre umbră,<br />
            Iar dacă tu fugi de pașii tăi și totul e "bine",<br />
            Dacă stai prea rapid și voința ți-e sumbră,<br />
            Dacă fericirea e macabră,<br />
            Dacă nu mai ai ce spune...<br /><br />
            
            Nu mai simt că suntem.<br />
            Totuși, e o libertate<br /><br />
            
            Să crezi și să nu vezi.<br />
            Sunt prea lacomă la idei,<br />
            Iar tu prea strivită de voci alb-negru ca să crezi.<br />
            Dar eu sunt tu și ea este el și poate toți evrei<br />
            În fața cățelușului nazist,<br />
            Care nu te lasă pisică să fii.<br /><br />
            
            Cu toate acestea, adică fiind uitat<br />
            Între haine de neon și un nimic cumplit,<br />
            Vreau încă să-ți uit interfața și, cu tumult,<br />
            Să știu că "noi" este perpetuu mai mult<br />
            decât eu și tu stând la o masă care trebuie arsă.<br /><br />
            de Robert Bereș<br /><br /><br />


            Rațe pe un râu se învârt în triunghi, <br />
            Râul pe o rață se află, dar nu îl văd.<br />
            Ce straniu, am cumpărat ieri trei ochi<br />
            Și cămașa tot descheiată mi-o prevăd.<br />
            Pe râu în mijloc, am intrat la universitate<br />
            Ieri sau mâine, nu îmi mai amintesc.<br />
            Acum că mă gândesc, în unanimitate<br />
            Am dorit doar rațe pe un râu să privesc,<br />
            Precum triunghiul ar avea două laturi:<br />
            Eu și tu. Cred că te-am uitat în copacul<br />
            Cu cămăși, iar tu m-ai lăsat în picturi.<br />
            O furie intră prin ușă: "al cui este dulapul?"<br />
            Este iarnă. Trebuie să lăsăm tot ce avem<br />
            Și să plătim factura la fericire.<br />
            Nu este fericirea tot ce avem?<br />
            Suntem rațe. Trebuie să trăim în plutire.<br /><br />
            de Robert Bereș<br /><br /><br />

            îți spun că nu vreau copii nici să mă căsătoresc nu-mi plac nunțile și te rog nu mă lua și de data asta cu tine mamă se numesc commitment issues sau rejection fear sau ceva de genul ăsta am de toate la cap sunt imună numa la sindromul stockholm ediția la măritat. <br /><br />
            mă ceartă buni că ea moare și eu nu-i fac nepoți de parcă nepoții ar lăcui-o face cu inima și și-a pus și aparat la inimă și eu totuși nu-i fac nepoți la șaișpe ani nu știu să am grijă nici de mine nici de soră-mea nici măcar de vreun bombardier și dacă e să fim frank nu-i fac nepoți nici mai târziu da ea nu tre să știe asta că oricum moare până atunci și să moară liniștită dacă tot. <br /> <br />
            te-aș combina da-s beată tot timpul și nu-mi mai dă tăria curaj aștept să mă combini tu dă-o în puii mei ești bărbat și nu voi fi eu bărbat în locul tău. mi-am făcut partea am făcut totul ca la carte ca tipele de paișpe ani ți-am cerut foc la bastion deși eu nu fumez ți-am dat follow pe insta cu poză obscenă la story și cu cont neprivat ți-am oferit atenția pe care n-o primești acasă și am avut eu grijă să nu mai fii touch starved m-am curvit de față cu toți am făcut totul ca la carte și totuși votca-i de vină că mă lasă la greu. <br /> <br />
            pentru tine m-aș mărita în las vegas. pentru mine ai lua trenul spre vamă să facem skinny dipping în mare de răsăritul majoratului meu <br /><br />
            despre iubirea în las vegas, de Oana Tomuță<br /><br /><br />


            Primul contact, concretizarea a ceea <br />
            ce știam demult amândoi, a avut mai multe etape.<br />
            Familiarul, lipit de pielea mea, devenind străin, atât de departe, simțit ca prin folie de plastic.<br />
            Imaginea ta, topindu-te în mine odată cu bariera intangibilă, descoperindu-ți ochii mânjiți în ceață care văd același peisaj.<br />
            Pisica ta intrând și ieșind tactil din cameră, fără să sară pe noi ca de obicei, luând și restul inhibițiilor pe ușă.<br /><br />

            Steril și murdar, cromozomii s-au atins, s-au alipit, s-au preschimbat, s-au înăbușit, fără să fi făcut însă parte din fenomenul de apogeu biologic, instinctiv, plantat întru toți întregii. Doar au făcut schimb de locuri.<br />
            Atât s-a putut. Nu e nimic întreg în noi.<br />
            Instinctul devine filozofie.<br />
            Biologia devine chimie.<br />
            Normalitatea devine.<br />
            Devine.<br />
            Devine.<br />
            Dumnezeu devenim noi.<br />
            Ne vom plămădi din nou cu propriile mâini, vom creea întregul care nu ne-a fost hărăzit de această profană treime.<br />
            Biologie. Instinct. Divinitate.<br />
            Te-am botezat întru numele meu. Dă-mi coasta ta.<br /><br />
            de Agripa Nistor<br /><br /><br />


            S-arunci o piatră în deșert <br />
            nu înseamnă<br />
            nimic.<br />
            S-arunci o piatră în deșert înseamnă<br />
            să împungi cu acul marmura lui David,<br />
            înseamnă urma tacului pe luciul negru al bilei<br />
            înseamnă împotrivirea sclerei față de tic.<br /><br />
            
            Dar s-arunci o piatră în deșert<br />
            nu înseamnă nimic,<br />
            pentru că nisipul și-a uitat limba;<br />
            acum strigă doar "Dune, dune, dune<br />
            Valul!"<br /><br />
            de Maia Chira<br /><br /><br />


            Mă respecți când mă țin de mână cu iubita mea atât de convențional frumoasă; când mă aranjez asemenea ei, când aleg să mă ascund în spatele unor fuste jalnice; când mă folosesc de toate lecțiile de teatru pentru a mă îmblânzi pe mine însămi; când mă eliberez, drastic diferit de cine sunt cu adevărat. Privesc absent la fața mea. Sunt aproape respectabilă ca femeie masculină, dar nu mi s-ar permite a îndrăzni să fiu bărbatul feminin. Sunt un corp frumos și dezirabil într-o minte prea bolnavă. Mi-e interzis a fi alteritatea unor unice și universale experiențe. Mă respect pentru că sunt; pentru că sunt nonconformă și lipsită de romantism. Sunt respectabilă pentru că sunt o drag queen deplorabilă și cu rujul mult prea lat. Mă simt respectată când iubita mea îmi sărută pieptul și înțelege cât de mult mă urăsc. Sunt deformată, sunt inumană. Sunt ea și el și noi și nimeni. Sunt nimicul împlinit. <br /><br />
            Sunt totul nesătul. <br /> <br />
            Înțeleg că nu-s doar eu; sunt eu, sunt tu și toți. Sunt întregul și umanul infinit. <br /><br />
            Respectabilitate şi umanitate, de Gabi Urian<br /><br /><br />


            Birds are singing in my backyard <br />
            In the tree that longs for summer<br />
            And I’m sitting, sound asleep<br />
            Dreaming of a lover.<br /><br />

            For she’s a petunia,<br />
            While I am a narcissus.<br />
            “Not meant to be”, I think<br />
            As I’m dancing sound asleep.<br /><br />

            “Who am I to dream of her,<br />
            The one who’s born inside my head?<br />
            And who am I to talk about<br />
            The garden in my brains?”<br /><br />

            I wake up, it feels unreal,<br />
            And here I am, inside my bed<br />
            With no lover by my side<br />
            And no hand to hold in mine.<br /><br />
            Petunia, de Gabi Urian







          </em>
        </div>
      }
      { blog?.title == 'În conversație cu noua generație de poeți' || blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q3}</em>
      }
      <h3 className='article' >{blog?.paragraph6}</h3>
      { blog?.title == 'În conversație cu noua generație de poeți' &&
        <em className='article'>{blog?.q4}</em>
      }
      <h3 className='article' style={{fontSize:24, fontWeight:500}}>{blog?.paragraph7}</h3>
      <h3 className='article' >{blog?.paragraph8}</h3>
      { blog?.title == 'În conversație cu noua generație de poeți' &&
        <em className='article'>{blog?.q5}</em>
      }
      <h3 className='article' style={{fontSize:24, fontWeight:500}}>{blog?.paragraph9}</h3>
      <h3 className='article' >{blog?.paragraph10}</h3>
      { blog?.title == 'În conversație cu noua generație de poeți' && 
        <em className='article'>{blog?.q6}</em>
      }
      <h3 className='article' style={{fontSize:24, fontWeight:500}}>{blog?.paragraph11}</h3>
      <h3 className='article' >{blog?.paragraph12}</h3>
      <h3 className='article' style={{fontSize:24, fontWeight:500}}>{blog?.paragraph13}</h3>
      
      <h3 className='article'>{blog?.paragraph14}</h3>
      { blog?.title == 'În conversație cu noua generație de poeți' && 
        <em className='article'>{blog?.q1}</em>
      }
      <h3 className='article' style={{fontSize:24, fontWeight:500}}>{blog?.paragraph15}</h3>
      
      <h3 className='article' >{blog?.paragraph16}</h3>
      { blog?.title == 'În conversație cu noua generație de poeți' || blog?.title == 'În conversație cu noua generație de artiști' && 
        <em className='article'>{blog?.q2}</em>
      }
      <h3 className='article' style={{fontSize:24, fontWeight:500}}>{blog?.paragraph17}</h3>
      
      <h3 className='article'>{blog?.paragraph18}</h3>
      { blog?.title == 'În conversație cu noua generație de poeți' &&
        <em className='article'>{blog?.q7}</em>
      }
      <h3 className='article' style={{fontSize:24, fontWeight:500}}>{blog?.paragraph19}</h3>
      
      <h3 className='article' >{blog?.paragraph20}</h3>
      { blog?.title == 'În conversație cu noua generație de poeți' &&
        <em className='article'>{blog?.q5}</em>
      }
      <h3 className='article' >{blog?.paragraph21}</h3>
      { blog?.title == 'În conversație cu noua generație de poeți' || blog?.title == 'În conversație cu noua generație de artiști' && 
        <em className='article'>{blog?.q6}</em>
      }
      
      <h3 className='article' >{blog?.paragraph22}</h3>

      <h3 className='article' >{blog?.paragraph23}</h3>
      { blog?.title == 'În conversație cu noua generație de poeți' || blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q1}</em>
      }
      <h3 className='article' >{blog?.paragraph24}</h3>
      { blog?.title == 'În conversație cu noua generație de poeți' && 
        <em className='article'>{blog?.q2}</em>
      }
      <h3 className='article' >{blog?.paragraph25}</h3>
      { blog?.title == 'În conversație cu noua generație de poeți' &&
        <em className='article'>{blog?.q6}</em>
      }
      <h3 className='article' >{blog?.paragraph26}</h3>
      { blog?.title == 'În conversație cu noua generație de poeți' &&
        <em className='article'>{blog?.q8}</em>
      }
      <h3 className='article' >{blog?.paragraph27}</h3>
      { blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q9}</em>
      }
      <h3 className='article' >{blog?.paragraph28}</h3>
      { blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q10}</em>
      }
      <h3 className='article' >{blog?.paragraph29}</h3>
      <h3 className='article' >{blog?.paragraph30}</h3>

      { blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q10}</em>
      }
      <h3 className='article' >{blog?.paragraph31}</h3>
      { blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q11}</em>
      }
      <h3 className='article' >{blog?.paragraph32}</h3>
      <h3 className='article' >{blog?.paragraph33}</h3>
      { blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q12}</em>
      }
      <h3 className='article' >{blog?.paragraph34}</h3>
      <h3 className='article' >{blog?.paragraph35}</h3>
      { blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q13}</em>
      }
      <h3 className='article' >{blog?.paragraph36}</h3>
      <h3 className='article' >{blog?.paragraph37}</h3>
      { blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q14}</em>
      }
      <h3 className='article' >{blog?.paragraph38}</h3>
      { blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q15}</em>
      }
      <h3 className='article' >{blog?.paragraph39}</h3>
      <h3 className='article' >{blog?.paragraph40}</h3>
      { blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q16}</em>
      }
      <h3 className='article' >{blog?.paragraph41}</h3>
      <h3 className='article' >{blog?.paragraph42}</h3>
      <h3 className='article' >{blog?.paragraph43}</h3>
      { blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q17}</em>
      }
      <h3 className='article' >{blog?.paragraph44}</h3>
      <h3 className='article' >{blog?.paragraph45}</h3>
      <h3 className='article' >{blog?.paragraph46}</h3>
      { blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q18}</em>
      }
      <h3 className='article' >{blog?.paragraph47}</h3>
      <h3 className='article' >{blog?.paragraph48}</h3>
      <h3 className='article' >{blog?.paragraph49}</h3>
      <h3 className='article' >{blog?.paragraph50}</h3>
      <h3 className='article' >{blog?.paragraph51}</h3>
      { blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q19}</em>
      }
      <h3 className='article' >{blog?.paragraph52}</h3>
      <h3 className='article' >{blog?.paragraph53}</h3>
      <h3 className='article' >{blog?.paragraph54}</h3>
      <h3 className='article' >{blog?.paragraph55}</h3>
      { blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q20}</em>
      }
      <h3 className='article' >{blog?.paragraph56}</h3>
      <h3 className='article' >{blog?.paragraph57}</h3>
      { blog?.title == 'În conversație cu noua generație de artiști' &&
        <em className='article'>{blog?.q21}</em>
      }
      <h3 className='article' >{blog?.paragraph58}</h3>
      <h3 className='article' >{blog?.paragraph59}</h3>

      { blog?.music != null &&
        <div style={{marginRight: 8+"%", marginLeft:8+"%"}}>
          <br /><br />
        <iframe style={{borderRadius:12+"px"}} src={`https://open.spotify.com/embed/${blog.type}/${blog.music}?utm_source=generator&theme=0`} width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      }

      
    </div>
  )
};

export default Article;

import React from "react";
import washedClean from "./washed_clean.jpg";
function Stories(props) {
  return (
    <div id="Stories" className="layout">
      {props.story === "none" && (
        <>
          <h1>Eden Fenn</h1>
          <h2>short stories</h2>
          <div className="stories-list">
            <div className="story">
              <h3
                className="story-link"
                onClick={() => {
                  props.setStory("washedClean");
                }}
              >
                Washed Clean
              </h3>
              <h4>
                published in <em>Nature Futures</em> March 2020
              </h4>
            </div>
            <div className="story">
              <h3
                className="story-link"
                onClick={() => {
                  props.setStory("gaiaHypothesis");
                }}
              >
                Gaia Hypothesis
              </h3>
              <h4>
                published in <em>Daily Science Fiction</em> April 2020
              </h4>
            </div>
            <div className="story">
              <h3
                className="story-link"
                onClick={() => {
                  props.setStory("fiveSixSeven");
                }}
              >
                Five Six Seven
              </h3>
              <h4>
                published in <em>Asimov's Science Fiction Magazine #462</em>
              </h4>
            </div>
          </div>
          <img
            src={washedClean}
            className="portrait small"
            alt="illustration from Washed Clean. Art by Jacey"
          />
        </>
      )}
      {props.story === "gaiaHypothesis" && (
        <div id="story-reader">
          <div className="story-header">
            <h3 className="story-link header">Gaia Hypothesis</h3>
            <h4>published in Daily Science Fiction in April 2020</h4>
          </div>
          <div id="story-body">
            <p>No matter what we did, they kept dying.</p>
            <p>
              We were quick to correct the knowable causes. A stronger ion
              radiation shield to prevent cancer. Increased exercise regimens to
              stem bone density loss and muscle atrophy. Lamps to mimic
              sunlight, vitamins, antidepressants, sleeping pills. Despite every
              intervention, the colonists always wasted away within seven years
              of their arrival on Mars.
            </p>
            <p>
              Just before the tenth anniversary of the colony's founding, news
              outlets on Earth began reporting that there were no survivors from
              the first two expeditions, and that more recent arrivals were on
              track for total fatality on a similar timeline. Subsequently,
              volunteers for new expeditions declined by ninety-five percent:
              fuel on the fire of population decline.
            </p>
            <p>
              You will recall that around this time, I proposed that we explore
              other, non-mechanistic, causes. That suggestion was derided by
              almost everyone in this room.
            </p>
            <p>
              While you continued to search fruitlessly for answers in the
              observable world, I quietly began my own course of study. I
              scoured countless texts on theology, philosophy, and world
              religions. I looked for anything I could find on spirit, animism,
              prana: anything that credited life to forces beyond physics and
              chemistry.
            </p>
            <p>
              My reading led me to deep ecology, to the Gaia hypothesis. And
              ultimately to the belief, appearing in cultures throughout
              history, that the force animating humans and all life comes from
              the Earth itself. It was no coincidence, I realized, that life on
              our homeworld was so abundant while everything we brought here
              seemed to die. We had cut ourselves off from the source, from life
              itself.
            </p>
            <p>
              My messages explaining this went unanswered. I was an irrelevant
              old biochemist who hadn't published since my arrival on Mars. An
              old woman quickly approaching her own seventh year on this planet,
              whose time was running out. Wasting away, growing reclusive as I
              neared the end. Even, some of you whispered, coming a bit
              unravelled.
            </p>
            <p>
              And then—just when I was beginning to think our colony was
              doomed—It spoke to me.
            </p>
            <p>
              This is not a dead world. Three months ago, the spirit of Mars
              revealed Itself to me. And It has spoken to me every night since
              that first visitation, making Its will known. The spirit of Earth
              spoke to our ancestors too, and they did not win Its favor
              cheaply. Our new god demands what all gods demand: sacrifice.
            </p>
            <p>
              By now, some of you are beginning to understand why I've called
              you here today.
            </p>
            <p>
              The doors are locked. This chamber is being flooded with oxygen as
              we speak. You will all be unconscious when you are burned in
              offering; there will be no pain. This is not what I wanted, but it
              is what the spirit demands. Know that your deaths will mean life
              for your fellow colonists, and the ultimate success of our
              mission. Know that I would take your place if I could. But the
              spirit demands that I remain.
            </p>
            <p>
              Do not waste your last moments on fear. Consider yourselves
              honored, that you were chosen to pay this price.
            </p>
          </div>
        </div>
      )}
      {props.story === "washedClean" && (
        <div id="story-reader">
          <div className="story-header">
            <h3 className="story-link header">Washed Clean</h3>
            <h4>published in Nature Futures in March 2020</h4>
          </div>
          <div id="story-body">
            <p>The record of my sins is written on every cell.</p>
            <p>
              “Before we can move forward,” says Sister Ruth, “I need to make
              sure you’re fully committed. You’ll only have this opportunity
              once.”
            </p>
            <p>
              I nod, a gesture I hope is demure, betraying no annoyance. I
              wouldn’t have called her back if I wasn’t sure.
            </p>
            <p>
              Two photographs rest on the steel desk that divides us. Sister
              Ruth points at the one on her right, my left. “This is Anette
              Whitman. She never understood the harm in living by her own rules.
              She didn’t see the point in faith. She got along fine this way for
              years, but with only her own moral compass to guide her, she went
              further and further astray. Now she’s a drug dealer facing a
              prison sentence, unemployable, with no future. A dead-end woman.”
            </p>
            <p>
              I glance up from my folded hands to look at the photo. My own
              grainy mugshot stares back at me.
            </p>
            <p>
              Sister Ruth fixes her gaze on me until I meet her eyes, then
              indicates the other photo. “This is Anne White.”
            </p>
            <p>
              The woman in it could be my distant relative, or a picture of me
              drawn from a verbal description. She’s wearing a head covering
              identical to Sister Ruth’s—shaped like a nun’s, but baby blue.
            </p>
            <p>
              Mom raised me Catholic. She had a wayward phase in her twenties
              and made her share of mistakes, including me. When it was time to
              get her life back on track, she did the prodigal son routine and
              returned to everything she’d left: her parents, her faith, her
              church. If we were still talking, me joining this “cult” might
              make her disown me all over again. But the New Church offers a
              more practical form of absolution.
            </p>
            <p>
              “Anne is an acolyte of the New Church. She’s forgotten her selfish
              ways and left her old life behind. She works every day to atone
              for her sins. And in recognition of that atonement, the Church has
              given her a new start. Her past has been erased.”
            </p>
            <p>
              My “selfish ways” began with a stray social media post. A
              Church-backed state delegate said some unsavory things about a
              woman’s place, so I said some unsavory things about that delegate.
              I figured he’d block me and that would be the end of it.
            </p>
            <p>
              It was a lazy act of dissent, the kind of thing people used to do
              without thinking twice, but the rules were changing more quickly
              than I knew. The next day I arrived at the coffee shop for my
              shift and found myself out of a job. My ex-boss showed me a tablet
              screen displaying a citizen record, where my vulgar comment was
              displayed next to my social security number and the drop of blood
              taken as part of my background check when I was hired.
            </p>
            <p>
              Worse, the social network had surrendered my private message
              history to the Feds. A curated selection of chats with my friends
              and girlfriend were displayed in my record as well, ranging from
              much more candid commentary on current events to lewd photos I’d
              sent when Kat was studying abroad. The portrait of a degenerate.
              From that day forward, it was all there for any prospective
              employer to see.
            </p>
            <p>
              I found a couple more jobs after that, back-of-house work at the
              filthiest kitchens in the city with the filthiest managers,
              nowhere I could stand to stay for long. Soon that pattern of quick
              turnover was part of my record as well. For the past eighteen
              months I’ve made my living outside of traditional employment, any
              way I could. Now that’s caught up with me too.
            </p>
            <p>
              “So,” Sister Ruth asks, “which of these women do you want to be?”
            </p>
            <p>I nod toward the woman with a future, the woman with no past.</p>
            <p>
              “Very good.” Ruth smiles and turns to the correctional officer.
              “You can release her to my care.”
            </p>
            <p>
              I sign the papers as Ruth drives me to the baptism. I agree never
              to contact anyone from my old life again. But there’s no one to
              contact: I broke things off with Kat before she could be dragged
              down with me. Most of my old friends have gone silent, not wanting
              my acquaintance on their records. And I’ve made new friends these
              past few months, friends who will find a way to reach me. There
              are always back channels.
            </p>
            <p>
              At the Church’s rebirthing center, I lie on a baby blue table
              suspended over the baptismal pool. The priest reads the words of
              the rite as the anesthesiologist secures my breathing mask and IV.
            </p>
            <p>
              Ruth’s smile is the last thing I see as I’m lowered into the
              thick, milky fluid. “We’ll see you soon, Anne.”
            </p>
            <p>
              In the baptismal pool, my cells will rebuild themselves, my DNA
              rewritten so I can never be identified as Annette Whitman again.
              It’s the only way my record can be expunged. When I wake, I won’t
              recognize my own face in the mirror. But I’ll be reborn, made new,
              my past behind me. My sins washed clean.
            </p>
            <p>
              In exchange, I’ll owe the Church seven years of mandatory service.
              Seven years to study them from the inside, to learn their secrets,
              to share everything I find. I’ll be a cleverer sinner, this time.
              I will learn the rules of this new world; I’ll do my dissent in
              secret. I will find the places the all-seeing eye isn’t looking.
              They won’t catch me again.{" "}
            </p>
          </div>
        </div>
      )}
      {props.story === "fiveSixSeven" && (
        <div id="story-reader">
          <div className="story-header">
            <h3 className="story-link header">Five Six Seven</h3>
            <h4>published in Asimov's Science Fiction Magazine #462</h4>
          </div>
          <div id="story-body">
            <p>
              I am almost sure I can hear the vertebra scraping when I turn my
              head.
            </p>
            <p>
              “Thanks for calling Moksha Mobile Customer Service. Can you please
              hold?” I’m flipping the handswitch to connect the next caller
              before this one has a chance to reply. The minute motion hurts;
              everything hurts today.
            </p>
            <p>
              “I’m very sorry to hear that, ma’am,” Keith tells his customer in
              a tone that suggests he is not very sorry at all. “We have no clue
              what caused the problem. Probably a terrorist attack or
              something.”
            </p>
            <p>
              I try to face him without moving my neck any more than absolutely
              necessary. Don’t, I say silently, with emphatic lip motions so he
              can’t mistake my meaning. Today is enough of an ordeal already
              without spreading even more panic. I can appreciate the attempt at
              humor, but he doesn’t seem to realize these calls are going to
              keep us here all night. The automated system, which normally
              handles most of our calls, is down.
            </p>
            <p>
              I know Keith well enough after four years working together to read
              his expression: God, Doreen, lighten up a bit. “I’m very sorry,”
              he repeats, but my next customer is already on the line.
            </p>
            <p>
              I inhale and put on my best Happy Pink Collar voice. “Moksha
              Mobile Customer Service.”
            </p>
            <p>
              “Yes, hi, I need some help. My cell stopped working about forty
              minutes ago. I’ve been on hold this whole time.”“Yes,” I say for
              what must be the hundredth time today, “we apologize for keeping
              you waiting. We are presently experiencing a higher-than -normal
              call volume due to similar disruptions in service.” I take his
              name and user ID: a Mr. Don Cohen. “Let me pull up your records…”
            </p>
            <p>
              This phrase serves as a command to my cell, which accesses the
              information and feeds a display into my occipital lobe; I see it
              as if it’s being projected on my blank white desk. The display
              stays centered in my vision wherever I turn, though I can’t turn
              comfortably anyhow. The information is what I’m expecting: “Mr.
              Cohen. It appears you’re running the Oversoul Model 3?” All of the
              service disruptions, and there are thousands of them, are Oversoul
              3s.
            </p>
            <p>“Yes. I don’t know, I think it’s the 3…”</p>
            <p>
              I read him the script. “We’ve been getting calls by a large number
              of customers today reporting similar issues with this device. We
              believe the problem is due to a coding error in the recent
              firmware update, but our technicians are still working to isolate
              it.”
            </p>
            <p>
              “Firmware update?” Mr. Cohen is evidently confused. “I didn’t
              update anything.”
            </p>
            <p>
              “Firmware updates are automatic, sir. They almost never create any
              problem; this is an anomaly.” The problem has nothing to do with
              the firmware update, but that’s the official story, and Mr. Cohen
              certainly won’t know the difference. “All I can tell you right now
              is that our technicians are working to remedy this issue as soon
              as possible, and we hope to restore service to your device in the
              very near future.”
            </p>
            <p>
              “So you’re just going to leave me hanging like this? What if
              there’s an emergency? How am I supposed to access my documents for
              work?” Mr. Cohen’s voice is climbing toward hysteria.
            </p>
            <p>
              “You’ll have to use a handheld computer until your cell is online
              again. I’m extremely sorry about this, sir, but again, Moksha is
              working its absolute hardest to find a solution to the problem. Is
              there anything else I can help you with?” My voice remains
              cartoon-character peppy.
            </p>
            <p>“Wait!” he shouts. “You can’t just leave me like—”</p>
            <p>
              “Our apologies, sir. I hope you have a wonderful day.” My
              peripheral vision is filled with five, six, now seven flashing
              call-waiting lights, each accompanied by a gentle chime to remind
              me not to delay too long. I flip the handswitch to connect the
              next caller. “Moksha Mobile Customer Service, thank you for
              holding…”
            </p>
            <p className="whitespace">–</p>
            <p>
              The contact center finally stops taking calls at 6:30 PM American
              Standard Time, a full two hours past our regular schedule, and by
              the time we close down the office it is nearly 7:00. “Disconnect
              me from the Block 12 network,” I tell my cell, and several
              graphics—phone line status icons, calendar, corporate e-mail
              account widget—disappear at once from my vision. You Worked 9.62
              Hours Today, a line of text announces; then that disappears too. I
              toy with my handswitch to double-check it; nothing happens. Good.
              I never get a moment’s peace in my own head, until I clock out.
            </p>
            <p>
              The second and third floors of the contact center each host ten
              blocks that, fully staffed, contain 30 employees each. When I
              started working at the call center—hell, nearly ten years ago now,
              right after I married Charles and moved here from Jersey—Blocks
              21-30 occupied the fourth floor. As CASS, the automated call
              system, was improved to handle more and more customer requests,
              individual blocks and finally the entire floor were shut down. And
              in the past few months, Blocks 18-20 at the far end of our floor
              have gone dark. Scary times, for those of us who have put years
              into working here and who depend on our jobs. But today, CASS is
              offline indefinitely, because it was CASS that caused the Oversoul
              3 malfunctions—tens of thousands, by the most recent count. The
              technicians are working to discover why.
            </p>
            <p>
              “Hell of a day,” Keith remarks as we watch row after row of the
              fluorescent tubes lighting our block go dark. “We did real good,
              Doreen.”
            </p>
            <p>
              My fingers are numb. I get up slowly, putting on the prim smile I
              always wear when I’m here. “Keith, try to refrain from joking
              about terrorist attacks in the office, and especially while
              speaking to our customers. We want to avoid associating our brand
              with rumors about Anonymous or some such hacker group, and all the
              more when people are already in a panic.”
            </p>
            <p>
              Keith scratches his beard, abashed. “Um, yeah, I’ll try not do
              that anymore. Wouldn’t want our customers running scared of
              ghosts.” I suppose a bit of pain is getting through the smile,
              because next he asks, “Are you feeling okay?”
            </p>
            <p>
              “I’ve just been sitting too long, that’s all.” I fasten the smile
              more securely to my mouth. Keith knows about the
              arthritis—cervical spondylosis, my orthopedist calls it—but I
              can’t have anyone (even someone as apathetic about office politics
              as Keith) getting the impression that it’s bad enough to get in
              the way of doing my job. One more month.
            </p>
            <p>
              We walk together down the central corridor to the elevator, where
              Jude catches the door for us just before it closes. Jude is a
              technician, and I know without asking that he’s been
              troubleshooting CASS all day. He looks positively thrilled.
              “Well,” he begins as we ride to the lobby, “you certainly don’t
              see something like that every day.”
            </p>
            <p>“Positively beautiful,” Keith replies.</p>
            <p>
              “I don’t see what was beautiful about it.” I lift a hand to
              support my neck, which does nothing to help. The skin around my
              cell is itching. We don’t talk until we get outside, but when
              we’ve put some distance between ourselves and the front door, I
              add: “In any case, I’d be careful acting so amused about upset
              customers while in that building, if I were either of you. You
              never know who might be listening.”
            </p>
            <p>
              Jude shrugs. “CASS is listening, usually, but we don’t have to
              worry about that for the time being. And if you think they have a
              real live person monitoring the cameras, hell, they’d have to pay
              him.”
            </p>
            <p>
              Keith laughs along with him. “So, Jude… This wouldn’t happen to be
              your handiwork, would it?”
            </p>
            <p>
              Jude sees himself as something of a working-class hero. With
              positions disappearing all over the call center, he’s taken upon
              himself to protect his coworkers’ job security through small acts
              of sabotage. He’s slipped a number of bugs into CASS in the past,
              but those were miniscule, mostly limited to some amusing responses
              to customer requests—nothing as intrusive as this. I don’t know if
              he realizes that tampering of this magnitude could cost far more
              than a job: Walton International, our parent company, would likely
              punish the offender with a permanent no-hire order, scarier and
              longer-lasting than any accompanying legal action.
            </p>
            <p>
              Jude starts to answer Keith’s question, but I speak before he can:
              “I don’t want to hear a word about it. I really don’t want to be
              involved.”
            </p>

            <p>
              “You can’t be serious,” Jude says, and we lock eyes for a moment.
            </p>
            <p>“I’m serious. I won’t hear another word about it.”</p>
            <p>
              He breaks the stare and shrugs. “Whatever you say, Doreen. Not
              another word.” He picks at the peach fuzz on his chin, which I’ve
              tried to convince him makes him look like an adolescent. “You get
              home safe.” He hangs back with Keith, to continue the
              conversation, no doubt.
            </p>
            <p>
              I have my ten-year review next month. As per Walton
              International’s corporate policy, an employee ranked “excellent”
              or better at the ten-year review is eligible to upgrade from the
              Premium insurance plan to the Premium Plus plan, which will cover
              eighty percent of my arthroplasty. It will still be expensive—I
              need three vertebrae replaced; there’s no simple way to go about
              it at this point—but I’d sign off on a lifetime of debt, if that’s
              what it takes.
            </p>
            <p className="whitespace">–</p>
            <p>
              By Friday, the techs have managed to restore service to the
              affected cells, but as the root cause hasn’t been uncovered in
              CASS’s code, she remains offline. This means more work for us than
              usual, and we still have upset customers calling even though their
              cells are back online by now. These are the ones who didn’t have
              access to another phone line or who never managed to connect a
              call through three days of All representatives are currently
              assisting other customers. They’re less panicked, less furious,
              than the ones before, but they’re still afraid. Mostly, I’m
              finding, they want to be reassured.
            </p>

            <p>
              During a call I glimpse a passive-aggressive text message from
              Rich, the floor manager:
            </p>
            <p className="bold">
              GLAD TO SEE CUSTOMER SATISFACTION RATES ARE PICKING UP TODAY,
              SUGAR
            </p>
            <p>
              When I get a chance between calls, I dictate, “Customer
              satisfaction has everything to do with our ability to solve a
              problem. I think my block is doing very well in unusual
              circumstances.” My cell converts the message to text and sends it
              as a reply. It’s unnecessary, really; it’s Rich’s job to keep the
              pressure on, but he knows how well we’re handling the crisis.
              Block 18, particularly, is striking an exemplary balance between
              productivity and the best customer service that can be given right
              now. I’m making sure of it—and making sure Rich will remember,
              when my review comes around.
            </p>
            <p>
              Lunch breaks were shortened to fifteen minutes during the service
              interruptions; we have our full hour back now. Block 12 eats at
              noon. I used to try to get out of the building and spend my sixty
              minutes in a more pleasant setting, but recently, the walk to
              Marathon Grill hasn’t been worth putting any more strain on my
              neck. Sometimes it feels like there are these strings attached to
              every part of my body, like marionette strings, all leading back
              to those three vertebrae—C5, C6, C7—tugging with every movement.
              Here a subtle pull, there a sharp one. I want to be home in bed.
            </p>
            <p>
              “Want anything from the mess hall, Ms. Noble?” asks Alexis, the
              skinny girl from Block 12’s sixth line. How old is she?
              Twenty-four? To feel that young again.
            </p>

            <p>
              “Just have Keith bring me a green tea, please. And Alexis,
              remember to ask our customers if there’s anything else you can do
              for them before ending a call. That’s been coming up repeatedly on
              your surveys.” Did she catch me grimacing?
            </p>

            <p>
              “Oh, right. Sorry. I will. I’ll have Keith come right over with
              that tea.” She hastily bows out.
            </p>
            <p>
              I alternate between staring at my hands and staring at the ceiling
              as I wait for my tea. There’s little else to look at in the
              building. There’s no need for desktop computers, as the computers
              are built into the staff. Most desks have little besides a
              handswitch for connecting calls (faster than voice commands) and a
              blank white partition at which one stares to read cell data
              without the distraction of visual clutter. Some people also have
              trinkets to make the call center feel somewhat more like a home:
              photographs of boyfriends and girlfriends; popsicle-stick
              sculptures made by their children. As the assistant and block
              manager, respectively, Keith and I have slightly larger desk
              spaces than the rest of the block, but the added area serves
              little function—my framed photograph, of Charles, went into an old
              paper shredder I found in the print room, the frame to some
              representative I can scarcely recall. The window offices on our
              floor, besides Rich’s, all go to middle management from other
              departments; the rest of us get fluorescents. It can’t be helping
              my health, this lack of natural light.
            </p>
            <p>
              I smell Keith coming before I see him. “Thanks for the tea,” I
              greet him, and he sets the paper cup on the desk so I needn’t turn
              to receive it. He’s a bit of a smartass, but I like Keith more
              than I let on, especially to him. I hand-picked him to help me
              manage the block.
            </p>
            <p>
              “Word around the office is, we have some internal affairs people
              coming to look into the issue with CASS. Everyone keeps
              regurgitating that factoid about how she has the processing power
              of five human brains, which corporate takes to mean the error was
              human, not software. I think it was intentional, but what they
              don’t know is whether it was an inside job or a hack from outside
              Moksha.” He smirks. “Maybe I wasn’t too far off about the
              terrorist thing.”
            </p>
            <p>
              “I don’t imagine it’s anything so glamorous.” I rotate in my chair
              until I can see his face; to my surprise, it is etched deep with
              exhaustion. Keith looks exactly how I feel. “How have your calls
              been going? No major trouble today?”
            </p>
            <p>
              “Not today, no…” He sighs. I wait for him to continue; it’s a
              moment before he does. “I just keep thinking about this call from
              the day it happened. This guy’s wife, Mary Chang or something, was
              calling for him. And they were really scared. I mean, a lot of
              these people have been scared, but these two were terrified. The
              guy was a government employee with a big chunk of his memory in
              Cloud storage, so of course he couldn’t access it with the
              connection down. But he was starting to lose other things too, big
              stuff, not just work things. He couldn’t remember his wife’s
              name.” Now Keith looks scared himself. “When I first got the call,
              I was laughing about it—how do you get that wired in, to the point
              where you start to lose things like that? But the more I thought
              about it, the more it started bugging me. I couldn’t even get to
              sleep last night, thinking about what I’d lose, if that happened
              to me. So I asked Jude about it, just a minute ago. He said that
              that’s impossible, that you can’t lose personal memory like that.
              He said the people were just in shock or whatever.” He sighs again
              and shrugs. “It was 2031, I think, when the implants hit the
              market. Just about six years ago. How much do we really know about
              them, about what they can do to our brains?”
            </p>
            <p>
              I’ve never seen him like this. I think, nothing, and I say, “I’m
              sure Jude knows what he’s talking about. Those customers were just
              in shock, like you said.”
            </p>
            <p>
              “Yeah,” he says, “yeah,” and returns to his desk. I hope he
              doesn’t think I’m like this in real life. There are two people in
              all of us: our natural selves, and the selves we become when
              circumstances require it. If Rich is listening in on my cell, if
              anyone else in in earshot is paying attention, I can’t let myself
              show even the slightest doubt in our product. I need my review to
              go perfectly.
            </p>
            <p>
              The scraping sound in my neck is definitely audible now. Keith
              doesn’t say anything—no one at the office ever does—but I notice
              his little glances when he hears it.
            </p>
            <p className="whitespace">–</p>
            <p>
              My mother calls from the nursing home. She tells me the doctors
              are saying Dad has entered the sixth stage of Alzheimer’s. She
              tells me I really need to get up to visit more often. I tell her
              I’m trying, but with work six days a week and only one left to
              groceries and bills and housekeeping, the two-hour train ride to
              Edison is hard to fit in. I tell her I’ll try harder, I’ll
              hopefully come up once work slows down. It’s just really messy
              now. Good, she says, and she tells me to make sure I do.
            </p>
            <p>
              Jude thinks that within decades we’ll solve the problem of death.
              Our computers are already more complex than the observable brain;
              all that remains is finding some way to transcribe the mind onto
              the machine. He may very well be right. My mother might just miss
              immortality. It’s too late for Dad already.
            </p>
            <p className="whitespace">–</p>
            <p>
              “Can you think of anything someone might have said, maybe
              something you overheard, about being angry or dissatisfied with
              things here at work?”
            </p>
            <p>
              Rich is asking the questions, reading from a script. Perhaps they
              expect the answers will be more honest this way. The inspector
              sits in a corner of the office, murmuring notes. Rich has the
              windows dimmed; a weak trace of sunlight stumbles through. He’s
              leaning forward, hands folded, elbows on the immense glass desk.
              Mine brace my knees. “No, nothing I can think of.” I can think of
              plenty. If that’s what they’re investigating, Keith might find his
              back against the wall, as well as Jude.
            </p>
            <p>
              “Well, let us know if you remember anything. Umm,” Rich says, and
              glances back at the script. It’s printed on paper, very official.
              “When you close down your block at night, are you ensuing—” he
              hunches squinting over the sheet. “Ensuring. Are you ensuring that
              none of your subordinates are either on the network or still in
              the building?”
            </p>
            <p>
              “Each evening, I send everyone else home before performing my
              closing duties. Generally, Keith McElwee and I leave the building
              together. I’m always the last to log out.” I’m trying to be
              professional, but I can’t suppress a sigh. “You know all this,
              Rich. And if you’re worried about people in the building after
              hours, why not review the security camera footage?”
            </p>
            <p>
              “Well, see,” Rich begins, “It turns out that with CASS down, we
              can’t actually access the security cam—”
            </p>
            <p>
              The inspector cuts him short with a terse shake of the head. It’s
              strange to see such a full-faced man terse; his jowls quiver a
              little with the tension. Rich is a striking contrast, bony, with a
              huge forehead and gray eyes and graying hair. Aside from the
              scalp, he’s fairly attractive for his age, which must be nearly
              sixty by now. His hairline came further down his head when I began
              here, back when I was running a single line and he was managing my
              block. We haven’t moved so far since then.
            </p>
            <p>
              “Right,” he says in response to the inspector’s signal, “right.”
              After a last glance at the bottom of the page, he announces,
              “Well, that covers it for now. Thanks, sugar. I’m sure I’ll be
              calling you back in here if this guy has any more questions.”
            </p>
            <p>
              “Anything I can do to help.” I slowly rise from the chair, putting
              a hand on the desk to support my weight, taking care not to topple
              the fake-gold bowling ball atop it. It’s a league trophy; bowling,
              for some reason, is Rich’s thing. Jude’s thing is playing keyboard
              in some god-awful band; he says they’re trying to get a contract
              on the small imprint so they can play some local concerts. Keith’s
              thing, near as I can tell, is sarcasm. I guess everyone needs a
              thing. It gives shape to all the hours in the call center, to have
              something to look forward to outside it.
            </p>

            <p>
              “And if you don’t mind my saying,” Rich calls as I exit the room,
              “those pants look deliciously professional on you.” I don’t need
              to turn around to know the exact shape of his grin.
            </p>

            <p>
              The questioning was just standard procedure, but my neck is acting
              up worse than it was beforehand. I have a sense that I won’t make
              it through the end of my shift if I can’t get some rest. My lunch
              hour has already begun, so instead of returning to my desk or
              riding the elevator to the mess hall, I walk the length of the
              floor, passing my block and each of the others. 13, 14, 15, 16,
              17, hundreds of feet. And finally, the dark of Block 18.
            </p>

            <p>
              I’ve never tried this before, but no one is paying me any mind, so
              I easily slip into the grid of desks. Most of the chairs have been
              removed, but a few remain, the last sign that anyone ever filled
              this space. I gingerly sink into one, shaking off some
              superstitious fear I’ll upset its prior occupant. I set the alarm
              on my cell for three minutes before the end of my break, and for
              the first time in my life, I sleep on the job.
            </p>

            <p className="whitespace">–</p>

            <p>
              My apartment is frigid when I arrive at home. It’s a compromise:
              keeping the heat low lets me save more money for the surgery, but
              everything aches in the cold. I wrap myself in a blanket while I
              wait for the heat to rise. It doesn’t take long; it’s a small
              place.
            </p>
            <p>
              The new Ikea catalog came yesterday, and I haven’t had a chance to
              read it yet. I pull my feet up under me in my lone armchair
              (aging, black leather) as I open it. There’s a beautiful bedroom
              setup in black and white, elegant, not too showy. If I keep my job
              at the call center after my surgery—I’m not sure yet that I
              will—perhaps I’ll be able to afford it.
            </p>
            <p>
              The monthly deposit from Charles is late again. According to our
              prenuptial agreement, he should owe me half his income for six
              more years. Infidelity is a hard thing to prove, but Charles is
              not a careful man, and my lawyer (Sam Ferdock, highly recommended)
              secured a subpoena for the contents of his cell. In court Charles
              said that I was “frigid,” that my “withholding” sex forced him to
              seek it from one of his sociology students. It was my neck, of
              course he knew that, but in court he managed to beat the sum down
              to a pittance. And even after that, he can never manage to pay on
              time!
            </p>
            <p>
              Maybe I’ll call his wife tomorrow, and see what the delay is for.
            </p>
            <p className="whitespace">–</p>

            <p>
              It’s another week before it happens. When I log into the network
              to begin my shift, there is a message at the top of my inbox. It’s
              from CASS.
            </p>
            <p className="bold">GOOD MORNING, DOREEN.</p>
            <p>
              No one told me she was back online. My neck scrapes as my head
              jerks in surprise. “Good morning, CASS.”
            </p>
            <p>
              Keith is pleasantly surprised when he arrives. “It’s about time.
              I’m sick of handling every how-do-I-check-my-mail question
              ourselves. Still, guess it didn’t hurt our job security. They
              can’t get rid of us all now, when things like that can happen.” He
              smirks. Maybe it’s just a smile, and I just always read it as a
              smirk. “Did they ever find out what did happen?”
            </p>
            <p>“Sabotage,” I reply, though I don’t know what they found.</p>
            <p>
              It’s midmorning when we see the ample inspector, flanked by two
              more able-looking guards. They troop from the elevator to Rich’s
              office, where the door remains closed for some time. Then they
              troop back to the elevator. We see no more of them.
            </p>
            <p>
              It’s only when I disconnect from the network for lunch that I see
              the missed calls from Jude on my personal line—twelve of them. I
              make my way back to Block 18 and return his call.
            </p>
            <p>“Shit, Doreen.”</p>
            <p>“What’s wrong?”</p>
            <p>“Fired,” he manages.</p>
            <p>“What? How? What happened?”</p>
            <p>
              “That inspector, he came in with these two other guys, they said
              they were Walton loss recovery or something, they locked me out of
              CASS and dragged me out of the building and they say I’m never
              going to work again, shit, they’re saying they might take me to
              court for reckless endangerment…”
            </p>
            <p>
              “Jude, you need to calm down. Don’t let yourself get overwhelmed.
              I have to go, but I’ll call you back after work. Everything will
              be all right.”
            </p>
            <p>“Yeah? How the hell is that?”</p>
            <p>
              “I’ll call you after work,” I repeat, and I disconnect before he
              can respond.
            </p>
            <p>
              When I’m home for the night, I call back and talk to him at
              greater length. He’s calmer, then.
            </p>

            <p className="whitespace">–</p>

            <p>
              The day of my ten-year review, I wear my “professional” pants.
              Rich looks happy to see them; I keep my customer service smile on.
              “I hope you’re having a good morning, Rich.”
            </p>
            <p>
              “Good morning, sugar. Ten years already, is it?” He spares us both
              the seems-like-just-yesterday platitude, at least.
            </p>
            <p>
              “Yes, sir. It’s been a wonderful decade of service with you.” At
              this point, there’s no harm in laying it on thick.
            </p>
            <p>
              “Yeah, sure has.” He flicks the switch on a projector on his desk.
              An employment record appears on the blank back wall with my name
              and photograph. “Here you are. We spent a lot of time going over
              it, me and the district manager…” He keeps talking, but I don’t
              hear a word of it. My eyes are locked on the text on the wall.
            </p>
            <p className="bold">EVALUATION: GOOD</p>
            <p>“Good,” I croak. “You’re evaluating me as ‘good.’”</p>

            <p>
              “Yep. It’s a bigger raise than ‘satisfactory,’ but we think you’ve
              earned it.”
            </p>

            <p>
              My neck throbs like someone is taking a hammer to it. “‘Good’
              isn’t good enough, Rich. I’ve given my life for this job these
              past ten years.”
            </p>

            <p>
              “You gotta understand, sugar, there’s only so many ‘excellent’
              evaluations I can hand out. With CASS back online, it’s all I can
              do to keep your jobs. I’m out there fighting for you with
              Corporate. But you know those suits, always riding me about the
              bottom line.”
            </p>

            <p>
              I stare at my reflection in the golden bowling ball on the desk. I
              will not cry. “Rich, you know I have arthritis. I can’t get my
              surgery with my current insurance. And I don’t get the plan I need
              with a ‘good’ evaluation.”
            </p>

            <p>
              He replies, “And we took that into consideration, but we looked at
              the numbers and this is how it came out. It’s already in the
              system, I can’t change it now.”
            </p>

            <p>
              I lean forward, grimacing as much with anger as with pain. “Yes
              you can. You get on your goddamn cell and you update that
              evaluation.”
            </p>

            <p>
              He stares at me for a moment, his expression difficult to read.
              Then he laughs. “Whoa, there. No need to get aggressive, sugar.
              Maybe that nice raise on your evaluation can help pay for the
              surgery. It is what it is…”
            </p>

            <p>
              I have returned my gaze to the bowling ball. It is so bright, and
              so much harder than Rich’s bulbous forehead. He is still talking;
              I reach for it; he is still talking; my grip tightens on the
              finger holes. I begin to rise from my chair.
            </p>
            <p>
              “Now,” he concludes whatever he was saying, “is there anything
              else you need to talk to me about?”
            </p>

            <p>
              I look down at my hand. Even warped by the sphere, my reflection
              looks tired. I relax my fingers and retract them from the ball. I
              pull back the edges of my lips, tethered to anchor points in my
              neck; the prim smile returns to my face. “No, sir. Have a good
              day, sir.”
            </p>

            <p>
              When I return to my desk, I take a minute before connecting to the
              network. Ten deep breaths. My cell receives a notice from Walton
              Atlantic Bank: the second payment to Jude has been deducted from
              my account. This one is the bigger payment, the hush fee. Planting
              the bug might have ruined him, but at this point he has nothing to
              gain from giving the inspector my name. The sum we agreed upon was
              a large one, though not as large as I expected—the loss would have
              put me another month away from affording the surgery, as if that
              matters anymore. Jude needs whatever money he can get, now. I log
              in.
            </p>

            <p className="bold">GOOD MORNING, DOREEN.</p>

            <p>I don’t reply.</p>

            <p>
              The lines are slow today, as they have been every day since CASS
              was brought back online. At lunch, I notice several people from
              another block, carrying things down the hall: photographs of
              boyfriends and girlfriends; popsicle-stick sculptures made by
              their children. Some faces are streaked with tears. I have my
              lunch in the mess hall today. Just as I return, the fluorescent
              tubes that light Block 17 are beginning to go dark, row by row.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Stories;

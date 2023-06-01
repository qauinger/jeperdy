'use client';
import '../jeperdy.css';
import { ReactNode, useState } from "react";

export default function Home() {
	const [question, setQuestion] = useState<string | ReactNode>('');
	const [answer, setAnswer] = useState<string | ReactNode>('');
	const [id, setId] = useState('');
	const [state, setState] = useState(0);

	const backToBoard = () => {
		setState(0);
	}

	const showQuestion = (id?: string, question?: string | ReactNode, answer?: string | ReactNode) => {
		if(id && question && answer) {
			setId(id);
			setQuestion(question);
			setAnswer(answer);
		}
		setState(1);
	}

	const showAnswer = () => {
		var tile = document.querySelector<HTMLElement>(`#${id}`);
		if(tile?.firstChild) {
			(tile.firstChild as HTMLElement).setAttribute('style', 'color: var(--gray);')
		}
		
		setState(2);
	}

  return (
	<div className='board'>
		{state == 1 ?
			<div id='window'>
				<div id="button-top" onClick={(e) => backToBoard()}>← Back</div>
				<div id='window-text'>
					{question}
				</div>
				<div id="button-bottom" className='center' onClick={showAnswer}>Show Answer</div>
			</div>
		: null }
		{state == 2 ?
			<div id='window'>
				<div id="button-top" onClick={(e) => showQuestion()}>← Back</div>
				<div id='window-text'>
					{answer}
				</div>
				<div id="button-bottom" className='center' onClick={backToBoard}>Return</div>
			</div>
		: null }
		<div id='title'>
			Jeperdy!
		</div>
		<div className='row categories'>
			<div className='tile'>STATIC ELETRICITY</div>
			<div className='tile'>ELETRICIC CURRENT & CIRCUIT</div>
			<div className='tile'>MAGNETISM & ELECTROMAGNETISM</div>
			<div className='tile'>WAVES & SOUND</div>
			<div className='tile'>GEOMETRIC OPTICS & LIGHT</div>
			<div className='tile'>MODERN PHYSICS</div>
			<div className='tile'>NUCLEAR ENERGY</div>
		</div>
		<div className='row clues'>
			<div id='a1' className='tile' onClick={(event) => showQuestion('a1', <>A glass rod becomes positively charged when rubbed with silk. The silk becomes charged because it...</>, <>Loses electrons</>)}>
				<div className='question-value'><span className='dollar'>$</span>200</div>
			</div>
			<div id='a2' className='tile' onClick={(event) => showQuestion('a2', <>_______ is the flow of electrons?</>, <>Current</>)}>
				<div className='question-value'><span className='dollar'>$</span>200</div>
			</div>
			<div id='a3' className='tile' onClick={(event) => showQuestion('a3', <>A grid of dots represent the magnetic field is going _______ in relations to the page?</>, <>Out of the page</>)}>
				<div className='question-value'><span className='dollar'>$</span>200</div>
			</div>
			<div id='a4' className='tile' onClick={(event) => showQuestion('a4', <>A substance through which a wave can travel is called a _____</>, <>Medium</>)}>
				<div className='question-value'><span className='dollar'>$</span>200</div>
			</div>
			<div id='a5' className='tile' onClick={(event) => showQuestion('a5', <>What is the color of a light wave with a frequency of 1.5 X 10<sup>18</sup> Hz?</>, <>Green</>)}>
				<div className='question-value'><span className='dollar'>$</span>200</div>
			</div>
			<div id='a6' className='tile' onClick={(event) => showQuestion('a6', <>A hydrogen atom undergoes a transition from the n=3 state to the ground state. The total number of different possible photon energies that may be emitted is?</>, <>3</>)}>
				<div className='question-value'><span className='dollar'>$</span>200</div>
			</div>
			<div id='a7' className='tile' onClick={(event) => showQuestion('a7', <>Identify the nucleons present in the atomic nucleus whose symbol is <span className="supsub"><sup>22</sup><sub>10</sub></span>Ne</>, <>10 protons &12 neutrons</>)}>
				<div className='question-value'><span className='dollar'>$</span>200</div>
			</div>
		</div>
		<div className='row clues'>
			<div id='b1' className='tile' onClick={(event) => showQuestion('b1', <>The unit of charge in the SI system is the </>, <>Coulomb (C)</>)}>
				<div className='question-value'><span className='dollar'>$</span>400</div>
			</div>
			<div id='b2' className='tile' onClick={(event) => showQuestion('b2', <>If two 10 ohm resistors are in parallel, then the resistance of the circuit is...</>, <>5 Ohms</>)}>
				<div className='question-value'><span className='dollar'>$</span>400</div>
			</div>
			<div id='b3' className='tile' onClick={(event) => showQuestion('b3', <>In the right hand rule the thumb points in the direction of current and the fingers curl in the direction of the ________ _____ </>, <>Magnetic field</>)}>
				<div className='question-value'><span className='dollar'>$</span>400</div>
			</div>
			<div id='b4' className='tile' onClick={(event) => showQuestion('b4', <>The maximum distance that the particles of a wave&apos;s medium vibrate from their rest position is called the...</>, <>Amplitude</>)}>
				<div className='question-value'><span className='dollar'>$</span>400</div>
			</div>
			<div id='b5' className='tile' onClick={(event) => showQuestion('b5', <>When a light wave enters a new medium and is refracted, there must be a change in the light wave&apos;s...</>, <>Speed</>)}>
				<div className='question-value'><span className='dollar'>$</span>400</div>
			</div>
			<div id='b6' className='tile' onClick={(event) => showQuestion('b6', <>What does the photoeletric effect prove?</>, <>The particle nature of light.</>)}>
				<div className='question-value'><span className='dollar'>$</span>400</div>
			</div>
			<div id='b7' className='tile' onClick={(event) => showQuestion('b7', <>What is the energy equivalent (in MeV) of 1 atomic mass unit.</>, <>931 MeV</>)}>
				<div className='question-value'><span className='dollar'>$</span>400</div>
			</div>
		</div>
		<div className='row clues'>
			<div id='c1' className='tile' onClick={(event) => showQuestion('c1', <>If 8.0 joules of work is required to transfer 4.0 coulombs of charge between 2 points, the potential diffrence between the two points is...</>, <>2.0 Volts</>)}>
				<div className='question-value'><span className='dollar'>$</span>600</div>
			</div>
			<div id='c2' className='tile' onClick={(event) => showQuestion('c2', <>A 10 ohm resistor and a 40 ohm resistor are in parallel. The current in the 10 ohm resister is 1 ampere. What is the current in the 40 ohm resistor?</>, <>0.25 Amps</>)}>
				<div className='question-value'><span className='dollar'>$</span>600</div>
			</div>
			<div id='c3' className='tile' onClick={(event) => showQuestion('c3', <>On a bar magnet, the magnetic field arrows point from the _____ side to the _____ side</>, <>North side to the South side</>)}>
				<div className='question-value'><span className='dollar'>$</span>600</div>
			</div>
			<div id='c4' className='tile' onClick={(event) => showQuestion('c4', <>What is the wavelength of a sound wave whose speed is 330 meters per second and whose frequency is 990 hertz?</>, <>0.33 meters</>)}>
				<div className='question-value'><span className='dollar'>$</span>600</div>
			</div>
			<div id='c5' className='tile' onClick={(event) => showQuestion('c5', <>Interference experiments such as diffraction demonstrate the...</>, <>Wave nature of light</>)}>
				<div className='question-value'><span className='dollar'>$</span>600</div>
			</div>
			<div id='c6' className='tile' onClick={(event) => showQuestion('c6', <>What is the energy of a photon of blue light whose frequency is 6x10<sup>14</sup> Hz? <br/>(h = 6.63x10<sup>-34</sup>)</>, <>4x10<sup>-19</sup> Joules</>)}>
				<div className='question-value'><span className='dollar'>$</span>600</div>
			</div>
			<div id='c7' className='tile' onClick={(event) => showQuestion('c7', <>If the mass of one proton is totally converted into energy, it will yield a total energy of...</>, <>1.50x10<sup>-10</sup> Joules</>)}>
				<div className='question-value'><span className='dollar'>$</span>600</div>
			</div>
		</div>
		<div className='row clues'>
			<div id='d1' className='tile' onClick={(event) => showQuestion('d1', <>The force between 2 fixed, charged spheres is F. If the charge in each sphere is halved, what is the force between them</>, <><sup>F</sup>/<sub>4</sub></>)}>
				<div className='question-value'><span className='dollar'>$</span>800</div>
			</div>
			<div id='d2' className='tile' onClick={(event) => showQuestion('d2', <>If the current of a circuit is 3 amps and the resistor is 5 ohms, what is the voltage?</>, <>15 Volts</>)}>
				<div className='question-value'><span className='dollar'>$</span>800</div>
			</div>
			<div id='d3' className='tile' onClick={(event) => showQuestion('d3', <>An electromagnetic wave consists of both an electric field and a magnetic field. These fields are _____________ in relation to eachother.</>, <>Perpendicular</>)}>
				<div className='question-value'><span className='dollar'>$</span>800</div>
			</div>
			<div id='d4' className='tile' onClick={(event) => showQuestion('d4', <>A steel piano wire is 72.9 cm long and has a mass of 4.54 x 10<sup>-3</sup> kg. The fundamental frequency of the wire is 262 Hz, corresponding to the frequency of middle C on the musical scales. Determine the tension to which the wire is pulled in order to vibrate with this frequency.</>, <>909 N</>)}>
				<div className='question-value'><span className='dollar'>$</span>800</div>
			</div>
			<div id='d5' className='tile' onClick={(event) => showQuestion('d5', <>What is the wavelength of a light ray with a frequency of 5.09 X 10<sup>14</sup> Hz as it travels through Lucite?</>, <>3.93x10<sup>-7</sup> m</>)}>
				<div className='question-value'><span className='dollar'>$</span>800</div>
			</div>
			<div id='d6' className='tile' onClick={(event) => showQuestion('d6', <>All photons in a vacuum have the same _____</>, <>Speed</>)}>
				<div className='question-value'><span className='dollar'>$</span>800</div>
			</div>
			<div id='d7' className='tile' onClick={(event) => showQuestion('d7', <>A guitar string with a length of 80.0 cm is plucked. The speed of a wave in the string is 400 m/s. Calculate the frequency of the first harmonic.</>, <>250 Hertz</>)}>
				<div className='question-value'><span className='dollar'>$</span>800</div>
			</div>
		</div>
	</div>
  )
}

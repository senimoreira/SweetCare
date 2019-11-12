import * as React from 'react'
import '../css/Centro.css'

import ChartDiabetes from './ChartDiabetes'
import ChartBatimentos from './ChartBatimentos'

const doenca1 = [{diabetes: 100},
    {diabetes: 80},
    {diabetes: 89},
    {diabetes: 111},
    {diabetes: 90},
    {diabetes: 92},
    {diabetes: 116},
    {diabetes: 110},
    {diabetes: 130},
    {diabetes: 98},
    {diabetes: 140},
    {diabetes: 130},    
    {diabetes: 85},
    {diabetes: 99},
    {diabetes: 101},
    {diabetes: 120}];

const databatimentos = [{batimentos: 70},
    {batimentos: 71},
    {batimentos: 75},
    {batimentos: 74},
    {batimentos: 85},
    {batimentos: 90},
    {batimentos: 93},
    {batimentos: 80},
    {batimentos: 85},
    {batimentos: 87},
    {batimentos: 80},
    {batimentos: 73},    
    {batimentos: 70},
    {batimentos: 85},
    {batimentos: 87},
    {batimentos: 85}];

const Centro = () => {

    return (
        <div className = 'Centro'>

            <div className = 'ContainerUp' >

                <div className = 'Dashboard' >Dashboard</div>
                <div className = 'FirstThreeCards' > 
                    <div className = 'Card' > 
                        <div className = 'AppointmentWord'>
                        
                        NOTAS
                        
                    
                        </div>  
                        <div className = 'text'>
                        <ul>-Sofreu ataque cardiaco no dia 23/04/2015;</ul>
                        <ul>-Diabetes Tipo II;</ul>
                        </div>  
                    </div>
            
                    <div className = 'Card' ></div>
                    <div className = 'Card' ></div>

                </div>
            </div>

            <div className='ContainerDown' >
                <div className = 'Information' >

                    <div className = 'Right' >
                        <div className = 'Last-check-up' >Ritmo Cardíaco</div>
                        <div className = 'Rect' >
                            <div className = 'MiniRect' > 
                            <ChartBatimentos data = {databatimentos}/>
                            </div>
                        </div>
                    </div>

                    <div className = 'Right'>
                        <div className = 'Last-check-up' >Níveis de Glucose</div>
                        <div className = 'Rect'  >
                            <div className = 'MiniRect' > 
                            <ChartDiabetes data = {doenca1} />
                            </div>
                        </div>
                            
                    </div>
                
                    
                </div>


              </div>

        </div>
    )
}

export default Centro
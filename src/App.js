import { useCallback, useState } from 'react';
import './App.css';
import { Fligth } from './components/Flight/Flight';
import Datas from './utils/flights.json'


function sortAir(arr) {
  const newArr = arr.map(el => {
    return el.flight.legs[0].segments[0].airline.caption
  })
  const newArrCaption = []
  for (let str of newArr) {
    if (!newArrCaption.includes(str)) {
      newArrCaption.push(str);
    }
  }
  return newArrCaption.map((el) => { return { name: el, isChecked: false } });
  
}


function sortclichAirCompany(arrey) {
  const conteiner = []
  const AirArr = arrey.map((el) => {
    
    if (el.isChecked === true) {
      conteiner.push(el.name)
    }
  })
  return conteiner;
}

function App() {
  const [flightsArr, setFlightsArr] = useState(Datas.result.flights);
  const [airFlightCompany, setAirFlightCompany] = useState(sortAir(Datas.result.flights))
 


  const handleOneTransferClick = useCallback((e) => {
    setFlightsArr(e.target.checked ? flightsArr.filter(flight =>
      flight.flight.legs[0].segments.length === 2 
    ) : Datas.result.flights)
  }, [flightsArr, setFlightsArr]);

  const handleWithoutTransferClick = useCallback((e) => {
    setFlightsArr(e.target.checked ? flightsArr.filter(flight => 
       flight.flight.legs[0].segments.length < 2 && flight.flight.legs[1].segments.length < 2 
     ) : Datas.result.flights)
  }, [flightsArr, setFlightsArr])

  const handleMinPrice = useCallback((e) => {
    setFlightsArr(flightsArr.filter(price => 
      +price.flight.price.totalFeeAndTaxes.amount > e.target.value  
     ))
  }, [flightsArr, setFlightsArr])

  const handleMaxPrice = useCallback((e) => {
    setFlightsArr(flightsArr.filter(price => 
      +price.flight.price.totalFeeAndTaxes.amount < e.target.value  
     ))
  }, [flightsArr, setFlightsArr])



  const handleLowestPriceClick = useCallback(() => {
     setFlightsArr(flightsArr.slice(0).sort((a, b) =>
     +a.flight.price.totalFeeAndTaxes.amount - +b.flight.price.totalFeeAndTaxes.amount))
  }, [flightsArr, setFlightsArr])

  const handleHighestPriceClick = useCallback(() => {
      setFlightsArr(flightsArr.slice(0).sort((a, b) =>
      +b.flight.price.totalFeeAndTaxes.amount - +a.flight.price.totalFeeAndTaxes.amount))
    
  }, [flightsArr, setFlightsArr])

  const handleAirCompanyClick = useCallback((e) => {
    setAirFlightCompany(prev => prev.map((el) => {
      if (el.name === e.target.value) {
        return { name: el.name, isChecked: !el.isChecked }
      }
      return { name: el.name, isChecked: el.isChecked }
    }))
 

  }, [])

  const airFlightCompanyClick = sortclichAirCompany(airFlightCompany);

    return (
      <div className="App">
        <div className='Page'>
          <div className='Sort'>
            <div className='SortPrice'>
              <div className='SortText'>C????????????????????</div>
              <div>
                <input type="radio" value="on"  name="Price" onChange={handleLowestPriceClick} /> - ???? ?????????????????????? ???????? <br></br>
              </div>
              <div>
                <input type="radio" value="on"  name="Price" onChange={handleHighestPriceClick}/> - ???? ???????????????? ???????? <br></br>
              </div>
              <div>
                <input type="radio" value="on"  name="Price" /> - ???? ?????????????? ???????????? <br></br>
              </div>
            </div>
            <div className='Filter'>
              <div className='SortText'>??????????????????????</div>
              <div className='SortInput'>
                <input type="checkbox" value="filterOneTransfer"  name="filter1" onChange={handleOneTransferClick} /> - 1 ?????????????????? <br></br>
              </div>
              <div className='SortInput'>
                <input type="checkbox" value="filterWithOutTransfer"  name="filter2" onChange={handleWithoutTransferClick} /> - ?????? ?????????????????? <br></br>
              </div>
            </div>
            <div className='SortMaxMinPrice'>
              <div className='SortText'>????????</div>
              <div className='SortInput'>
                ???? <input type="number" placeholder='0' onChange={handleMinPrice} /> <br></br>
              </div>
              <div className='SortInput'>
                ???? <input type="number" placeholder='100000' onChange={handleMaxPrice} /> <br></br>
              </div>
            </div>
            <div className='Aitline'>
              <div className='SortText'>????????????????????????</div> 
              {airFlightCompany.map((el, i) =>
                <div key={i}>
                    <input type="checkbox" value={el.name} name="Aitline" onChange={handleAirCompanyClick} /> { el.name } < br ></br>
                  </div>
              )  
              }
              
            </div>
          </div>
          <div>
            <div>
              {airFlightCompanyClick.length > 0 ? flightsArr.filter(airCompany => airFlightCompanyClick.includes(airCompany.flight.legs[0].segments[0].airline.caption))
                         .map((flight, i) =>
              <Fligth
                key={i}
                  legs={flight.flight.legs}
                  price={Math.round(flight.flight.price.totalFeeAndTaxes.amount)}
                />
              ) :  flightsArr.map((flight, i) =>
              <Fligth
                key={i}
                  legs={flight.flight.legs}
                  price={Math.round(flight.flight.price.totalFeeAndTaxes.amount)}
                />
              )} 
            </div>
            <div>
              <button className='buttonMore' >???????????????? ??????</button>
            </div>
          </div>
      
        
        </div>
      </div>
    );
  }


export default App;

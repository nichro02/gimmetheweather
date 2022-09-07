import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({ data }) => {
  //determine day of week
  const dayInWeek = new Date().getDay()
  //order array so that dayInWeek is first element in array
  const forecastDays = daysOfWeek.slice(dayInWeek, daysOfWeek.length).concat(daysOfWeek.slice(0, dayInWeek))

  console.log(dayInWeek)
  console.log(forecastDays)

    return (
    <>
      <label className="title">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <div className='daily-item'>
                        <img alt='weather' className='icon-small' src={`icons/${item.weather[0].icon}.png`}/>
                        <label className='day'>{forecastDays[idx]}</label>
                        <label className='description'>{item.weather[0].description}</label>
                        <label className='min-max'>Low: {Math.round(item.main.temp_min)}°C</label>
                        <label className='min-max'>High: {Math.round(item.main.temp_max)}°C</label>
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;

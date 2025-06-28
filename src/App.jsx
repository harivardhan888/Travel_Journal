import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import data from "./data.js"

export default function App(){
  const entryele = data.map((entry)=>{
      return(
        <Entry
            key = {entry.id}
            img = {entry.img}
            title = {entry.title}
            country = {entry.country}
            googleMapsLink = {entry.googleMapsLink}
            dates = {entry.dates}
            text = {entry.text}
        />
      )
  })
  return(
    <>
      <Header />
      {entryele}
    </>
  )
}
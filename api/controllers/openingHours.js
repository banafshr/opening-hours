const express = require('express')
const hoursData = require('../database/openingHours')

const openingHoursController = express.Router()

openingHoursController.get('/', (req, res) => {
  res.status(501).json({ error: 'Something went wrong' })
// const hours = hoursData
// res.json(hours)
})

openingHoursController.get('/openingHours', (req, res) => {
 

  parseHours = (day, nextDay) => {
    return day.reduce((tuples, entry, entryIndex, entries) => {
      if (entry.type === 'close') {
        if (entryIndex === 0) {
          return tuples
        }
        // Append entry value to last tuple in tuples
        return Object.assign([], tuples, {
          [tuples.length - 1]: tuples[tuples.length - 1].concat(entry.value)
        })
      }
      // It's not last entry, just create a new tuple for the day
      if (entryIndex < entries.length - 1) {
        return tuples.concat([[entry.value]])
      }
  
      // It's the last entry and it's 'open', so find the 'close' in the next day
      return tuples.concat([[entry.value, nextDay[0].value]])
    }, [])
  }
  
  const parseOpeningHours = (openingHours) => {
    const days = Object.keys(openingHours)
    return days.map((label, index) => {
      const day = openingHours[label]
      const nextDayName = days[index + 1] || days[0]
      const nextDay = openingHours[nextDayName]
      return {
        label,
        openingHours: parseHours(day, nextDay)
      }
    })
  }
  const hours = hoursData.map(data => parseOpeningHours(data))
  res.json(...hours)
})

module.exports = openingHoursController

import {capitalize, parseSeconds, convertToAMPM} from "./helpers"


it("should capitalize the text correctly", () => {
  const text = "test case"
  const capitalizedText = "Test case"
  expect(capitalize(text)).toBe("Test case")
  expect(capitalize(capitalizedText)).toBe("Test case")

})

describe('parseSeconds', () => {
  it('should convert seconds to hours and minutes', () => {
    const conversions = [
      {
        seconds: 3600,
        conversion: { hours: 1, minutes: 0 }
      },
      {
        seconds: 7200,
        conversion: { hours: 2, minutes: 0 }
      },
      {
        seconds: 5400,
        conversion: { hours: 1, minutes: 30 }
      },
      {
        seconds: 7500,
        conversion: { hours: 2, minutes: 5 }
      }
    ]
    conversions.forEach(({ seconds, conversion }) => {
      expect(parseSeconds(seconds).hours).toBe(conversion.hours)
      expect(parseSeconds(seconds).minutes).toBe(conversion.minutes)
    })
  })
})

describe('convertToAMPM', () => {
  it('should convert given hour to AM/PM', () => {
    const conversions = [
      {
        hours: { hours: 0, minutes: 0 },
        conversion: '12 AM'
      },
      {
        hours: { hours: 3, minutes: 0 },
        conversion: '3 AM'
      },
      {
        hours: { hours: 12, minutes: 0 },
        conversion: '12 PM'
      },
      {
        hours: { hours: 18, minutes: 0 },
        conversion: '6 PM'
      }
    ]
    conversions.forEach(({ hours, conversion }) => {
      expect(convertToAMPM(hours)).toBe(conversion)
    })
  })

  it('should work properly with minutes', () => {
    const conversions = [
      {
        hours: { hours: 0, minutes: 30 },
        conversion: '12:30 AM'
      },
      {
        hours: { hours: 3, minutes: 3 },
        conversion: '3:03 AM'
      },
      {
        hours: { hours: 12, minutes: 59 },
        conversion: '12:59 PM'
      },
      {
        hours: { hours: 18, minutes: 0 },
        conversion: '6 PM'
      }
    ]
    conversions.forEach(({ hours, conversion }) => {
      expect(convertToAMPM(hours)).toBe(conversion)
    })
  })
})
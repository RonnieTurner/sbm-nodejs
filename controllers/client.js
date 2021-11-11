exports.getClients = (req, res, next) => {
  const num = 2 + 2;
  console.log(num);
  res.status(200).json({
    client: [
      {
        name: "stacy",
        address: "123 street st",
        city: "Bennett",
        state: "CO",
      },
    ],
  });
};

exports.postClients = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const addressStreet = req.body.addressStreet;
  const addressCity = req.body.addressCity;
  const addressState = req.body.addressState;
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email;
  const onBoardDate = req.body.onBoardDate;
  const frequency = req.body.frequency;
  const dayOfWeek = req.body.dayOfWeek;
  const timeOfDay = req.body.timeOfDay;
  const bidValue = req.body.bidValue;

  res.status(201).json({
    message: "Client Added Successfully",
    post: {
      firstName: firstName,
      lastName: lastName,
      addressStreet: addressStreet,
      addressCity: addressCity,
      addressState: addressState,
      phoneNumber: phoneNumber,
      email: email,
      onBoardDate: onBoardDate,
      frequency: frequency,
      dayOfWeek: dayOfWeek,
      timeOfDay: timeOfDay,
      bidValue: bidValue,
    },
  });
};

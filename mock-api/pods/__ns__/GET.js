module.exports = (req, res) =>
  res.status(200).json([
      {
          name: "pod1",
          image: "repo/myimage",
          tag:"2.3",
          version: "1"
      },
      {
        name: "pod2",
        image: "repo/myimage",
        tag:"2.3",
        version: "1"
    }
  ]);
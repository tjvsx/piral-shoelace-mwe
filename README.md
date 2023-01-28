# piral-shoelace-mwe

> This scenario does not do any live pilet fetching. Instead, we are simply importing the piral ***shell*** instance into our mfe1 ***pilet***.

### Steps:
1. `cd shell && yarn install`
2. `cd mfe1 && yarn install & yarn start`

### Info:
- The following error is shown when trying to use shoelace-style in MFE1.
<img width="417" alt="Screenshot 2023-01-27 at 10 03 17 PM" src="https://user-images.githubusercontent.com/62122206/215238888-3f788b8a-ad22-4b2e-af64-f15005c022dc.png">

- We are however able to use normal xml tags.
```jsx
<>
  <input type="text" placeholder="Enter a greeting" />
  <button onClick={
    () => {
      updateGreeting((document.querySelector('input')).value);
    }
  }>Update Greeting</button>
</>
```

<img width="592" alt="Screenshot 2023-01-27 at 10 11 26 PM" src="https://user-images.githubusercontent.com/62122206/215239196-c46a243d-4311-475c-a94c-e46e2620230c.png">


One suspicion I have is whether or not shoelace components can/should be declared in the Layout of the PiralInstance

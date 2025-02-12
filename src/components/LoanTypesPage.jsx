import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

const loans = [
  { name: "Housing Loan", icon: "🏠" },
  { name: "Personal Loans", icon: "🤝" },
  { name: "Auto Loan", icon: "🚗" },
  { name: "Education Loan", icon: "📚" },
  { name: "Gold Loan", icon: "🏆" },
  { name: "Loans Against Securities", icon: "💰" },
  { name: "Loans Against Property", icon: "🏢" },
  { name: "PM Surya Ghar – Solar Roof Top", icon: "☀️" },
];

const LoanTypesPage = () => {
  return (
    <Grid container spacing={3} padding={3}>
      {loans.map((loan, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card elevation={3} sx={{ textAlign: "center", padding: 2 }}>
            <Typography variant="h4">{loan.icon}</Typography>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {loan.name}
              </Typography>
              <Button variant="contained" color="primary">
                More Information
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default LoanTypesPage;

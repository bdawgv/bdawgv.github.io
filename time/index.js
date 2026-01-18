// day of week 
var dayofweek = (new Date().getDay());
if (dayofweek == 0) {
    document.write("Sunday,");
} else {
    if (dayofweek == 1) {
        document.write("Monday, ");
    } else {
        if (dayofweek == 2) {
            document.write("Tuesday, ");
        } else {
            if (dayofweek == 3) {
                document.write("Wednesday, ");
            } else {
                if (dayofweek == 4) {
                    document.write("Thursday, ");
                } else {
                    if (dayofweek == 5) {
                        document.write("Friday, ");
                    } else {
                        if (dayofweek == 6) {
                            document.write("Saturday, ");
                        } else {
                            document.write("[error obtaining day of week], ")
                        }
                    }
                }
            }
        }
    }
} 

// month
var month = (new Date().getMonth())
if (month == 0) {
    document.write(" January ");
} else { 
    if (month == 1) {
        document.write(" February ");
    } else {
        if (month == 2) {
            document.write(" March ");
        } else {
            if (month == 3) {
                document.write(" April ");
            } else {
                if (month == 4) {
                    document.write(" May ");
                } else {
                    if (month == 5) {
                        document.write(" June ");
                    } else {
                        if (month == 6) {
                            document.write(" July ");
                        } else {
                            if (month == 7) {
                                document.write(" August ");
                            } else {
                                if (month == 8) {
                                    document.write(" September ");
                                } else {
                                    if (month == 9) {
                                        document.write(" October ");
                                    } else {
                                        if (month == 10) {
                                            document.write(" November ");
                                        } else {
                                            if (month == 11) {
                                                document.write(" December ");
                                            } else {
                                                document.write(" [error obtaining month] ");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
        }
    }
}
}

// day of month

var dayofmonth = (new Date().getDate())

if (dayofmonth == 1 || dayofmonth == 21 || dayofmonth == 31) {
    document.write(dayofmonth + "st, ");
} else {
    if (dayofmonth == 2 || dayofmonth == 22) {
        document.write(dayofmonth + "nd, ");
    } else {
        if (dayofmonth == 3 || dayofmonth == 23) {
            document.write(dayofmonth + "rd, ")
        } else  {
            if (dayofmonth >= 1 && dayofmonth <= 31) {
                document.write(dayofmonth + "th, ")
        } else {
            document.write("[error obtaining day of month], ")
        }
    } 
    
    // year
    
    var year = (new Date().getFullYear())
    document.write(year + ".")
}
}

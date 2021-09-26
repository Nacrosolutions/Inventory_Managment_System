package com.javainuse.model;

import java.io.Serializable;
import java.util.Date;

public class JwtResponse implements Serializable {

	private static final long serialVersionUID = -8091879091924046844L;
	private final String jwttoken;
	private final Boolean isTokenExpired;

	public JwtResponse(String jwttoken,Boolean isTokenExpired) {
		this.jwttoken = jwttoken;
		this.isTokenExpired=isTokenExpired;
	}

public String getToken() {
		return this.jwttoken;
	}

public Boolean getIsTokenExpired() {
	return isTokenExpired;
}
	
}